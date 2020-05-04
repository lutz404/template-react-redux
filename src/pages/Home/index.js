import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";
import {
  Container as GridContainer,
  Row,
  Col,
  setConfiguration
} from "react-grid-system";
import Layout from "../_layouts/default";

import {
  BsStarFill,
  BsStar,
  BsStarHalf,
  BsCalendar,
  BsPerson
} from "react-icons/bs";

setConfiguration({ gutterWidth: 10 });

export default function Perfil() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <div
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 300,
            marginBottom: 20,
            marginTop: 20
          }}
        >
          Bem vindo, {profile.nick}!
        </div>

        <div style={{ padding: 15 }}>
          <Row>
            <Col sm={6} lg={4}>
              <div className="artigo">
                <div className="artigo-header">
                  GRADE: an emerging consensus on rating quality of evidence and
                  strength of recommendations
                </div>
                <div className="artigo-body">
                  Guidelines are inconsistent in how they rate the quality of
                  evidence and the strength of recommendations. This article
                  explores the advantages of the GRADE system, which is
                  increasingly being adopted by organisations worldwide
                </div>
                <div className="artigo-footer">
                  <div className="artigo-data">
                    <BsCalendar /> &nbsp; 15/04/2020 &nbsp;&nbsp;&nbsp;
                    <BsPerson style={{ fontSize: 15 }} /> &nbsp; Andreas Lutz
                  </div>
                  <div className="artigo-rating">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="artigo">
                <div className="artigo-header">
                  GRADE: an emerging consensus on rating quality of evidence and
                  strength of recommendations
                </div>
                <div className="artigo-body">
                  Guidelines are inconsistent in how they rate the quality of
                  evidence and the strength of recommendations. This article
                  explores the advantages of the GRADE system, which is
                  increasingly being adopted by organisations worldwide
                </div>
                <div className="artigo-footer">
                  <div className="artigo-data">
                    <BsCalendar /> &nbsp; 15/04/2020 &nbsp;&nbsp;&nbsp;
                    <BsPerson style={{ fontSize: 15 }} /> &nbsp; Pedro Álvares
                  </div>
                  <div className="artigo-rating">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="artigo">
                <div className="artigo-header">
                  GRADE: an emerging consensus on rating quality of evidence and
                  strength of recommendations
                </div>
                <div className="artigo-body">
                  Guidelines are inconsistent in how they rate the quality of
                  evidence and the strength of recommendations. This article
                  explores the advantages of the GRADE system, which is
                  increasingly being adopted by organisations worldwide
                </div>
                <div className="artigo-footer">
                  <div className="artigo-data">
                    <BsCalendar /> &nbsp; 15/04/2020 &nbsp;&nbsp;&nbsp;
                    <BsPerson style={{ fontSize: 15 }} /> &nbsp; Pedro Álvares
                  </div>
                  <div className="artigo-rating">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4}>
              <div className="artigo">
                <div className="artigo-header">
                  GRADE: an emerging consensus on rating quality of evidence and
                  strength of recommendations
                </div>
                <div className="artigo-body">
                  Guidelines are inconsistent in how they rate the quality of
                  evidence and the strength of recommendations. This article
                  explores the advantages of the GRADE system, which is
                  increasingly being adopted by organisations worldwide
                </div>
                <div className="artigo-footer">
                  <div className="artigo-data">
                    <BsCalendar /> &nbsp; 15/04/2020 &nbsp;&nbsp;&nbsp;
                    <BsPerson style={{ fontSize: 15 }} /> &nbsp; Pedro Álvares
                  </div>
                  <div className="artigo-rating">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
}
