<template>
<f7-page :page-content="false">
    <f7-navbar title="Abdomen" back-link="Back"></f7-navbar>
    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>Fuerza</f7-link>
      <f7-link tab-link="#tab-2">Volumen</f7-link>
      <f7-link tab-link="#tab-3">Resistencia</f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <center>
            <p>Series de 20 repeticiones</p>
            
            <img src="../../assets/images/abdomen01.png" width="200px">

            <p>Series de 40 repeticiones lentas</p>
            
            <img src="../../assets/images/abdomen02.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen03.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen07.png" width="200px">
          </center>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-block>
          <center>
            <p>Series de 40 repeticiones lentas</p>
            
            <img src="../../assets/images/abdomen02.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen03.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen05.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen07.png" width="200px">
          </center>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-block>
          <center>
            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen03.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen04.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen06.png" width="200px">

            <p>Series de 60 repeticiones explosivas</p>
            
            <img src="../../assets/images/abdomen08.png" width="200px">
          </center>
        </f7-block>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
