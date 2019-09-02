import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Button from "../components/button";
import Menu from "../components/menu";
import Breadcrumb from "../components/breadcrumb";

const Eventos = () => (
  <div>
    <Head title="GuidaTech" />
    <Nav />
    <Menu />
    <main>
      <section>
        <Breadcrumb path="Eventos" />
      </section>
    </main>
    <style jsx>{`
      .esticar-largura {
        align-items: stretch;
        align-items: center;
      }
      main {
        padding-left: 220px;
      }

      @media (max-width: 768px) {
        .capa {
          width: 100%;
        }
      }

      main > section {
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </div>
);

export default Eventos;
