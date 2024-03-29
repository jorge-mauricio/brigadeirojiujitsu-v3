'use strict';

// Import Node Modules.
// ----------------------
// const gSystemConfig = require("../config-application.js"); // System configuration.
// const FunctionsGeneric = require("../" + gSystemConfig.configDirectoryComponents + "/functions-generic.js");
// const FunctionsCrypto = require("../" + gSystemConfig.configDirectoryComponents + "/functions-crypto.js");

// Context.
import { SyncSystemNSContext } from './syncsystem-ns-cb-context.js';

// import React from "react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

// Components.
import FrontendFilesListingRecord from './frontend-files-listing-record-cb-component.js';
// ----------------------

class FrontendFiles extends Component {
  // Context.
  static contextType = SyncSystemNSContext;

  // Constructor.
  // **************************************************************************************
  constructor(props, context) {
    // Component options.
    // idParentFiles: (category id)

    // configLayoutType: 1 - thumbnails (custom) | 11 - thumbnails (bootstrap) | 42 - slider BxSlider (custom)
    // configFilesNRecords: (maximum number of records to show)
    // configFilesSort: (custom order)
    // configFilesZoom: 0 - disabled | 1 - JQuery ElevateZoom | 2 - JQuery PanZoom

    super(props, context);
    /*
        {
            this.arrCategoriesListing = props.arrCategoriesListing;
        }
        this.arrCategoriesListing = props.arrCategoriesListing;
        */

    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).
    // ----------------------

    // Properties.
    // ----------------------
    this.idParentFiles;
    // this.idTbFiles;
    // this.contentType;
    this.configLayoutType;
    this.configFilesNRecords;
    this.configFilesSort;
    // this.configFilesZoom;

    this.queryDefault = ''; // NOTE: try to get from parent

    this.objFilesListing = {};
    this.arrFilesListing = [];
    // ----------------------

    // Define values - props parameters.
    // ----------------------
    this.idParentFiles = this.props.idParentFiles;
    this.configLayoutType = this.props.configLayoutType;
    this.configFilesNRecords = this.props.configFilesNRecords;
    this.configFilesSort = this.props.configFilesSort;
    // ----------------------

    // Logic
    // ----------------------
    try {
      // State creation.
      /*
            this.state = {
                // arrCategoriesListing: this.props.arrCategoriesListing
                // arrCategoriesListing: props.arrCategoriesListing
                arrCategoriesListing: []
            };
            */
      // Debug.
      // console.log("props=", props);
      // await this.build();
      // this.build();
    } catch (constructorError) {
      if (gSystemConfig.configDebug === true) {
        console.error(constructorError);
      }
    } finally {
      // State creation.
      this.state = {
        objFilesListing: this.objFilesListing,
        arrFilesListing: this.arrFilesListing,
        dataLoaded: false,
      };
    }
    // ----------------------
  }
  // **************************************************************************************

  // Lifecycle method.
  // **************************************************************************************
  async componentWillMount() {
    // Main build.
    // await this.build();
    // Head content.
    // await this.headBuild();
    // Title content.
    // await this.titleCurrentBuild();
  }
  // **************************************************************************************

  // Lifecycle method.
  // **************************************************************************************
  // componentDidMount()
  async componentDidMount() {
    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).
    // ----------------------

    // Logic.
    // ----------------------
    /**/
    try {
      // Main build.
      await this.build();

      // Head content.
      // await this.headBuild();

      // Title content.
      // await this.titleCurrentBuild();
    } catch (componentDidMountError) {
      if (gSystemConfig.configDebug === true) {
        console.error(componentDidMountError);
      }
    } finally {
      // TODO:
    }
    // ----------------------

    // Debug.
    // this.setState({ arrCategoriesListing: this.props.arrCategoriesListing });
    // console.log("this.props=", this.props);
  }
  // **************************************************************************************

  // Build object´s content.
  // **************************************************************************************
  async build() {
    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; // Deconstruct variables (each variable is allocated to it´s correspondent name).

    let apiURLFilesListing = '';
    let apiFilesListingResponse;
    // ----------------------

    // Logic.
    // ----------------------
    try {
      // API - build URL string.
      // apiURLFilesListing = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPIFiles + "/" + this.idParentFiles + "/?fileType=3&apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
      // apiURLFilesListing = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPIFiles + "/" + this.idParentFiles + "/?fileType=3&apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(gSystemConfig.configAPIKeySystem, "env"), 2);
      apiURLFilesListing = gSystemConfig.configAPIURL + '/' + gSystemConfig.configRouteAPI + '/' + gSystemConfig.configRouteAPIFiles + '/' + this.idParentFiles + '/?fileType=3';
      apiURLFilesListing += '&apiKey=' + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(gSystemConfig.configAPIKeySystem, 'env'), 2);
      // console.log("apiURLCategoriesDetailsCurrent=", apiURLCategoriesDetailsCurrent);

      // API - fetch data from backend.
      // let response = await fetch(apiURLCategoriesDetailsCurrent);
      apiFilesListingResponse = await fetch(apiURLFilesListing);
      // this.objFilesCurrent = await response.json();
      this.objFilesCurrent = await apiFilesListingResponse.json();
      // console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

      // Value definition.
      this.objFilesListing = this.objFilesCurrent.oflRecords;
      this.arrFilesListing = this.objFilesCurrent.oflRecords.resultsFilesListing;

      // Debug.
      // console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
    } catch (buildError) {
      if (gSystemConfig.configDebug === true) {
        console.error(buildError);
      }
    } finally {
      // Update state.
      this.setState({ objFilesListing: this.objFilesListing });
      this.setState({ arrFilesListing: this.arrFilesListing });

      this.setState({ dataLoaded: true }); // Note: Place on the last part of the logic.

      // Change state of in context.
      this.context.frontendContentListingLoaded = true;
    }
    // ----------------------
  }
  // **************************************************************************************

  // Render.
  // **************************************************************************************
  // async render()
  render() {
    // Variables.
    // ----------------------
    // const { gSystemConfig, FunctionsGeneric, FunctionsCrypto } = this.context;
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, SyncSystemRC } = this.context;

    let arrFilesListing;

    /*
        let idParentFiles;
        let idTbFiles;
        let contentType;
        let configLayoutType;
        let configFilesNRecords;
        let configFilesSort;
        */
    // ----------------------

    // Check if data is loaded.
    // ----------------------
    if (this.state.dataLoaded === false) {
      if (gSystemConfig.configDebug === true) {
        console.log('Still loading data.');
      }

      return (
        <SyncSystemRC.FrontendElementsLoading configLayoutType={1}>
        </SyncSystemRC.FrontendElementsLoading>
      );
    }
    // ----------------------

    // Define values.
    // ----------------------
    arrFilesListing = this.state.arrFilesListing;
    /*
        idParentFiles = this.props.idParentFiles;
        idTbFiles = this.props.idTbFiles;
        contentType = this.props.contentType;
        configLayoutType = this.props.configLayoutType;
        configFilesNRecords = this.props.configFilesNRecords;
        configFilesSort = this.props.configFilesSort;
        // arrCategoriesListing = this.props.arrCategoriesListing;
        */

    // Debug.
    // console.log('idParentFiles=', this.idParentFiles);
    // console.log("idTbFiles=", this.idTbFiles);
    // console.log('configLayoutType=', this.configLayoutType);
    // console.log('configFilesNRecords=', this.configFilesNRecords);
    // console.log('configFilesSort=', this.configFilesSort);
    // console.log("configFilesZoom=", this.configFilesZoom);

    // console.log('arrFilesListing=', arrFilesListing);
    // ----------------------

    // Output.
    // ----------------------
    return (
      <React.Fragment>
        {/* Files records. */}
        {arrFilesListing.length > 0 ? (
          <React.Fragment>
            <h4 className="ss-frontend-files-title">{SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'frontendFilesTitleMain')}</h4>
            <FrontendFilesListingRecord arrFilesListing={arrFilesListing} configLayoutType={this.configLayoutType}></FrontendFilesListingRecord>
          </React.Fragment>
        ) : (
          ``
        )}
      </React.Fragment>
    );
    // ----------------------
  }
  // **************************************************************************************
}

export default FrontendFiles;
