import React, { useState, useEffect, useRef } from "react";
import api from "../services/api";
import { Loading } from "../components/Loading/Loading";
import { NotFound } from "../components/NotFound/NotFound";
import Download from "../components/Button/DownloadFile";
import { useFetch } from "./useFetching";
import { Map } from "../types";
import { StaticMaps } from "../pages/StaticMaps";
import { Graphic } from "../components/Graphic/Graphic";
import { UserProps } from "../interfaces";
import { LegendMobile } from "../components/Legend/LegendMobile";

import Accordion from 'react-bootstrap/Accordion';
import { Section } from "../components/Section/Section";

function GetMap(args: UserProps) {

  const { data: map } = useFetch<Map>('/api/Data/mapas/' + args.id);
  const url = '/api/Data/mapas/resource/' + args.id;

  const parameters = {
    id: args.id,
    token: args?.user?.token,
    pos: '15',
    lef: '47'
  }

  if (map?.static === true) {
    parameters.pos = '25';
    parameters.lef = '8';
    return (
      <div>
        <h2>{map?.map_desc}</h2>
        <StaticMaps info={map?.map_id} />
        <Download {...parameters} />
        <div>
          <br></br>
        </div>
      </div>

    )
  } else {

    const Data: React.FC = () => {
      const [data, setData] = useState();
      const [loading, setLoading] = useState(false);
      const [err, setErr] = useState(false);
      const componentMounted = useRef(true);

      useEffect(() => {
        const getData = async () => {
          try {
            setLoading(true);
            const res = await api.get(url);
            if (componentMounted.current) {
              let json = res.data
              setData(json);
              setLoading(false);
            }
          } catch (Err) {
            setErr(true);
          }
        };
        getData();
        return () => {
          componentMounted.current = false;
        }
      }, []);

      if (err) {
        if (loading) setLoading(false);
        return <NotFound />;
      }

      if (data) {
        if (window.innerWidth < 750) {
          return (
            <div>
              <h2 style={{"paddingBottom": "5%"}}>{map?.map_desc}</h2>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Outras Informações</Accordion.Header>
                  <Accordion.Body>
                    <Section id={map?.map_id} isOverGraphic={true} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Graphic data={data} graphic={map} downloadProps={parameters} edit={args.edit} />
              <LegendMobile info={map?.map_legs} atr={map?.map_value} reference={map?.map_refs}/>
            </div>
          );
        }else{
          return (
            <div>
              <h2 style={{"paddingBottom": "2%"}}>{map?.map_desc}</h2>
              <Graphic data={data} graphic={map} downloadProps={parameters} edit={args.edit} />
            </div>
          );
        }
      } else {
        return (
          <Loading />
        )
      }
    };
    return (
      <Data />
    );
  }
}
export default GetMap
