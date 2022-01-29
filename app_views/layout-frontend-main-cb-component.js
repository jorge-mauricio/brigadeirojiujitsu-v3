'use strict'; // eslint-disable-line
// TODO: test to check if '' is required in the comments.

// Import Node Modules.
// ----------------------
// import gSystemConfig from "../config-application.js";
// const gSystemConfig = require("../config-application.js"); // System configuration.
// const SyncSystemNS = require("../" + gSystemConfig.configDirectoryComponents + "/syncsystem-ns.js");
import { SyncSystemNSContext } from '../components_react/syncsystem-ns-cb-context.js'; // eslint-disable-line

// import React from "react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactDOMServer from 'react-dom/server';
// import {Helmet} from "react-helmet";
// import Safe from "react-safe";

// import HTMLReactParser from "html-react-parser"; // error / webpack // put in the context
// const Parser = require('html-react-parser');
// import Parser from 'html-react-parser/dist/html-react-parser';
// import ReactRenderHTML from "react-render-html";
// const HtmlToReactParser = require('html-to-react').Parser;
// import HtmlToReactParser from 'html-to-react'.Parser;

// const TrackingCode = require("../tracking-code");
import TrackingCode from '../tracking-code.js';
import { tagsMetaDefault1, tagsStyleCSS, tagsFavicons, tagsMetaDefault2, tagsMetaDynamic1, javaScriptHead, javaScriptFoot } from './layout-frontend-elements.js';

// CSS.
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import StylesFrontend from '../app_styles/styles-frontend.css';
// import StylesFrontend from ("../" + gSystemConfig.configDirectoryStyles + "/styles-frontend.css");

// import StylesFrontend from '/app_styles/styles-frontend.css';
// import "../app_js/functions-syncsystem.js";

// import "babel-polyfill";

// Popper.
// import Popper from "popper.js";
// window.Popper = Popper;
// import "../app_js/popper/popper.min.js";
// import Popper from "../app_js/popper/popper.min.js";

// JQuery.
// import $ from 'jquery';
// import jQuery from 'jquery';
// window.jQuery = jQuery;
// window.$ = jQuery;
// import $ from 'jquery';

// import * as $ from "jquery";
// window.jQuery = window.$ = $;
// global.jQuery = require('jquery');

// Bootstrap.
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../app_styles/styles-frontend-bootstrap.scss";
// import '../node_modules/jquery/dist/jquery.min.js'

// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// require('bootstrap'); // caused error: $.fn.emulateTransitionEnd = function (duration)
// window.Bootstrap = require('bootstrap'); // caused: ReferenceError: window is not defined
// import "bootstrap/dist/js/bootstrap.js";

// Components.
import FrontendBanners from '../components_react/frontend-banners-cb-component.js'; // eslint-disable-line
// ----------------------

class LayoutFrontendMain extends Component {
  // Context.
  static contextType = SyncSystemNSContext;

  // Constructor.
  // **************************************************************************************
  constructor(props, context) {
    super(props, context);

    // State creation.
    this.state = {
      // titleCurrent: "old title"
      titleCurrent: '',
    };

    // Bind with method.
    // this.handleChange = this.handleChange.bind(this);
    this.setTitleCurrent = this.setTitleCurrent.bind(this);
  }
  // **************************************************************************************

  // Function to change the state of the title.
  // **************************************************************************************
  /**
   * Function to change the state of the title.
   * @param {string} sProperty
   * @param {string} strMessage
   * @example
   */
  setTitleCurrent(sProperty, strMessage) {
    this.setState({
      // [stateProperty]: strMessage
      // titleCurrent: strMessage
      titleCurrent: strMessage,
    });
  }
  // **************************************************************************************

  // Function to change the state.
  // TODO: transfer to an external file.
  // **************************************************************************************
  /**
   * Function to change the state.
   * @param {string} key
   * @param {string} value
   * @example
   */
  layoutStateHandler(key, value) {
    this.setState({
      [key]: value,
    });
  }
  // **************************************************************************************

  // Lifecycle methods.

  // Return the new, updated state based upon the props (desincouraged by the react developer team)
  /*
    static getDerivedStateFromProps(props, state)
    {
        // Note: Returns error if returns nothing.

    }
    */

  // Create a backup of the current way things are.
  /*
    getSnapshotBeforeUpdate()
    {
        // Note: Returns error if returns nothing.

    }
    */

  // Teardown or cleanup your code before your component disappears.
  componentWillUnmount() {
    // TODO:
  }

  componentDidMount() {
    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, HTMLReactParser, Safe } = this.context;
    // ----------------------

    // Logic.
    // ----------------------
    /**/
    try {
      // Jump to anchor.
      // ----------------------
      // if (this.props.location.hash !== '#anchorPricing') {
      if (this.props.location.hash !== '') {
        const anchorTarget = this.props.location.hash;

        // Function to wait for the value to change.
        const flagFrontendHomeLoaded = () => {
          if (this.context.frontendHomeLoaded === false) {
            setTimeout(flagFrontendHomeLoaded, 50);
            return;
          }
          FunctionsSyncSystem.scrollToTarget(anchorTarget.replace('#', ''));
          // TODO: modify scrollToTarget to make the replace.
          // console.log('this.state.frontendHomeLoad=', this.state.frontendHomeLoad);
        };

        flagFrontendHomeLoaded();
      }
      // ----------------------
    } catch (asyncError) {
      if (gSystemConfig.configDebug === true) {
        console.error(asyncError);
      }
    } finally {
      // TODO:
      // console.log('React.Children.count=', React.Children.count(this.props.children));
    }
    // ----------------------
  }

  // UNSAFE_componentWillReceiveProps(myNextProps) (deprecated)
  componentWillReceiveProps(myNextProps) {
    /*
    if(myNextProps.whatever != this.props.whaever)
    {
        // do something
    }*/
  }

  // Optmize the app´s resources.
  /*
    shouldComponentUpdate(myNextProps, myNextState)
    {
        // Note: Returns error if returns nothing.

        //  return true if want it to update
        
        //  return false if not want to update 


    }
    */

  // Render.
  // **************************************************************************************
  render() {
    // Variables.
    // ----------------------
    const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, HTMLReactParser, Safe } = this.context;
    // let objHtmlToReactParser = new HtmlToReactParser();
    // let hrpTrackingCode = objHtmlToReactParser.parse(TrackingCode);
    // ----------------------

    return (
      /* <html lang="pt-br"> */
      <html lang="en-us">
        <head>
          {HTMLReactParser(TrackingCode)}
          {/* ReactRenderHTML(TrackingCode) */}
          {/* hrpTrackingCode */}

          <meta charSet="UTF-8" />
          <meta name="format-detection" content="telephone=no" />

          {/* ReactRenderHTML(metaTagsDefault1) */}
          {HTMLReactParser(tagsMetaDefault1)}

          <title></title>

          {HTMLReactParser(tagsStyleCSS)}

          {HTMLReactParser(tagsFavicons)}

          {/* head dynamic tags  */}
          {HTMLReactParser(tagsMetaDynamic1)}

          {HTMLReactParser(tagsMetaDefault2)}

          {HTMLReactParser(javaScriptHead)}
        </head>

        <body className={/* StylesFrontend["ss-frontend-body01"]*/ 'ss-frontend-body01'}>
          <noscript>Please Enable JavaScript</noscript>
          <div id="root" className="ss-frontend-layout-container01">
            <header id="layoutHeader" className="ss-frontend-layout-header01">
              <div>
                <a href="/" title="Home" className="ss-frontend-layout-header-logo">
                </a>
                {/* Social Media */}
                <address className="ss-frontend-social-media-layout">
                  <a href="https://www.facebook.com/brigadeirojiujitsuusa/" target="_blank" title="Facebook" className="ss-frontend-social-media">
                  <i className="fab fa-facebook" />
                  </a>
                  <a href="https://youtu.be/" target="_blank" title="YouTube" className="ss-frontend-social-media">
                  <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.instagram.com/brigadeirojiujitsu.usa/" target="_blank" title="Instagram" className="ss-frontend-social-media">
                  <i className="fab fa-instagram" />
                  </a>
                </address>
                <a href="https://api.whatsapp.com/send?phone=19047049877" target="_blank" title="Phone" className="ss-frontend-link-contact01 ss-frontend-link-contact-layout">
                (904) 704-9877
                </a>
                <a
                  onClick={() => {
                    FunctionsSyncSystem.elementShowHideToggle('navMenu');
                  }}
                  title="Mobile Menu"
                  className="ss-frontend-mobile-layout-header-nav-menu d-lg-none"
                >
                  <i className="fa fa-bars" />
                </a>
                <nav id="navMenu" className="ss-frontend-layout-header-nav d-none d-lg-block d-xl-block">
                  <ul className="ss-frontend-links-ul01">
                    <li className="ss-frontend-links-li01 d-lg-none">
                      <a
                        id="navLinkClose"
                        onClick={() => {
                          // FunctionsSyncSystem.htmlGenericStyle01('divMenuMobile01', 'display', 'none');
                          FunctionsSyncSystem.elementShowHideToggle('navMenu');
                        }}
                        title="Close Menu"
                        className="ss-frontend-link01"
                      >
                        X Close
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkHome" href="/" title="Home" className="ss-frontend-link01">
                        Home
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkAcademy" href={'/' + gSystemConfig.configRouteFrontendContent + '/104/'} title="B/Academy" className="ss-frontend-link01">
                        B/Academy
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkPrograms" href={'/' + gSystemConfig.configRouteFrontendCategories + '/105/'} title="B/Programs" className="ss-frontend-link01">
                        B/Programs
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkAssociation" href={'/' + gSystemConfig.configRouteFrontendContent + '/106/'} title="B/Association" className="ss-frontend-link01">
                        B/Association
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkStore" href={'/' + gSystemConfig.configRouteFrontendCategories + '/111/'} title="B/Store" className="ss-frontend-link01">
                        B/Store
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkPhilanthropy" href={'/' + gSystemConfig.configRouteFrontendContent + '/107/'} title="B/Philanthropy" className="ss-frontend-link01">
                        B/Philanthropy
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01">
                      <a id="navLinkContact" href={'/' + gSystemConfig.configRouteFrontendContent + '/108/?idTbForms=113'} title="Contact Us" className="ss-frontend-link01">
                        Contact Us
                      </a>
                    </li>
                    <li className="ss-frontend-links-li01 d-lg-none">
                      <a id="navLinkContact" href={'/' + gSystemConfig.configRouteFrontendContent + '/110/'} title="Privacy Policy" className="ss-frontend-link01">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            {/* Banner */}
            {this.props.location.pathname == '/' ?
              <div className="ss-frontend-banners-container">
                <div className="ss-frontend-banners-container-element">
                  <img src="/files-layout/layout-desktop-banner-img1.png" alt="Element" />
                </div>
                <FrontendBanners idParentBanners={''} idTbCategories={''} configLayoutType={22} configDisplay={'horizontal'} configContentNRecords={''} configContentSort={''}></FrontendBanners>
              </div>
              : ``}
            <div className="ss-frontend-banners-footer">
              <span>
                EVERYWHERE
              </span>
              <span>
                EVERY DAY
              </span>
              <span>
                FOR EVERYONE
              </span>
            </div>

            {/* Messages */}
            <div id="messageSuccess" className="ss-frontend-success" style={{ display: 'none' }}></div>
            <div id="messageError" className="ss-frontend-error" style={{ display: 'none' }}></div>
            <div id="messageAlert" className="ss-frontend-alert" style={{ display: 'none' }}></div>

            {/* Content place holder - body */}
            <main id="layoutMain" className="ss-frontend-layout-main01">
              <div>
                {this.props.cphBody}
              </div>
            </main>

            {/* Footer. */}
            <footer className="ss-frontend-layout-footer01 ss-frontend-text-contact01">
              <div>
                {/* Site map. */}
                <nav className="ss-frontend-layout-footer-nav-layout">
                  <h4>
                    Site Map
                  </h4>
                  <div>
                    <ul className="ss-frontend-links-ul02">
                      <li className="ss-frontend-links-li02">
                        <a href="/" title="Home" className="ss-frontend-footer-links01">
                          Home
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendContent + '/104/'} title="Brigadeiro Academy" className="ss-frontend-footer-links01">
                          Brigadeiro Academy
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendCategories + '/105/'} title="Brigadeiro Programs" className="ss-frontend-footer-links01">
                          Brigadeiro Programs
                        </a>
                      </li>
                    </ul>
                    <ul className="ss-frontend-links-ul02">
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendContent + '/106/'} title="Brigadeiro Association" className="ss-frontend-footer-links01">
                          Brigadeiro Association
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendCategories + '/111/'} title="Brigadeiro Store" className="ss-frontend-footer-links01">
                          Brigadeiro Store
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendContent + '/107/'} title="Brigadeiro Philanthropy" className="ss-frontend-footer-links01">
                          Brigadeiro Philanthropy
                        </a>
                      </li>
                    </ul>
                    <ul className="ss-frontend-links-ul02">
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendContent + '/108/?idTbForms=113'} title="Contact Us" className="ss-frontend-footer-links01">
                          Contact Us
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href={'/' + gSystemConfig.configRouteFrontendContent + '/110/'} title="Register" className="ss-frontend-footer-links01">
                          Register
                        </a>
                      </li>
                      <li className="ss-frontend-links-li02">
                        <a href="#" title="Privacy Policy and Terms of Use" className="ss-frontend-footer-links01">
                          Privacy Policy and Terms of Use
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Social Media. */}
                <address className="ss-frontend-social-media-layout-footer">
                  <h4>
                    Social Media
                  </h4>
                  <div>
                    <a href="https://www.facebook.com/brigadeirojiujitsuusa/" target="_blank" title="Facebook" className="ss-frontend-social-media-footer">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="https://youtu.be/" target="_blank" title="YouTube" className="ss-frontend-social-media-footer">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="https://www.instagram.com/brigadeirojiujitsu.usa/" target="_blank" title="Instagram" className="ss-frontend-social-media-footer">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <img src="/files-layout/layout-mobile-footer-payments1.png" alt="Payments" className="d-lg-none" />
                </address>
                <a
                  onClick={() => {
                    FunctionsSyncSystem.scrollToTarget('anchorTop');
                  }}
                  title="Home"
                  className="ss-frontend-layout-footer-logo"
                ></a>
                {/* Customer service. */}
                <div className="ss-frontend-footer-contact-layout">
                  <h4>
                    Customer Service
                  </h4>
                  <a href="https://api.whatsapp.com/send?phone=19047049877" title="Phone" className="ss-frontend-footer-links01">
                    (904) 704-9877
                  </a>
                  <a href="mailto:contact@brigadeirojiujitsu.com" title="e-mail" className="ss-frontend-footer-links01">
                    contact@brigadeirojiujitsu.com
                  </a>
                  <img src="/files-layout/layout-desktop-footer-payments1.png" alt="Payments" className="d-none d-lg-block d-xl-block" />
                </div>
                {/* Credits. */}
                <small className=" ss-frontend-credit-layout">
                  <span className="ss-frontend-copyright">
                    {SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutCopyright')} ©&nbsp;
                    {gSystemConfig.configCopyrightYear}&nbsp;
                    {SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'configSiteTile')}.&nbsp;
                    {SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutCopyright1')}
                  </span>
                  <a href={gSystemConfig.configDevSite} target="_blank" className="ss-frontend-credit">
                    {SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutDevelopment')}:&nbsp;
                    {SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, 'layoutDevName')}
                  </a>
                </small>
              </div>
            </footer>
          </div>

          {/* Button Scroll to Top (fixed). */}
          <button
            id="btnTopFixed"
            onClick={() => {
              FunctionsSyncSystem.scrollToTarget('anchorTop');
            }}
            className="ss-frontend-shadow01 ss-frontend-btn-top-fixed"
            style={{ visibility: 'hidden' }}
          >
            <i className="fas fa-caret-up" />
          </button>
          <Safe.script>
            {`
              // Scroll listener.
              // Note: will not work if html / body height is set to 100% - use min/max-height.
                document.addEventListener('scroll', (e) => {
                  // Button back to top.
                  // elementShowByPosition('btnTopFixed', 'top', '50');
                  FunctionsSyncSystem.elementShowByPosition('btnTopFixed', 'top', '50');
    
    
                  // Debug.
                  // console.log('elementHeader', elementHeader);
                  // console.log('scrollValueRef', scrollValueRef);
                  // console.log('window.pageYOffset', window.pageYOffset);
                });
              `}
          </Safe.script>

          {/* React bundle script - SSR. */}
          <Safe.script src="/bundle.react.client.js"></Safe.script>
          <Safe.script>{`try{Typekit.load({ async: true });}catch(e){}`}</Safe.script>

          {HTMLReactParser(javaScriptFoot)}
        </body>
      </html>
    );
  }
  // **************************************************************************************
}

export default LayoutFrontendMain;
// export default withStyles(StylesFrontend)(LayoutFrontendMain);
