/**
 * Child component of Settings/Profile/AboutMe renders "About Me" section of profile setting page.
 */
/* global document */
import _ from 'lodash';
import React from 'react';
import PT from 'prop-types';

import { PrimaryButton, SecondaryButton } from 'topcoder-react-ui-kit';

import { getAllCountryObjects, getCountryObjFromAlpha3 } from 'utils/countries';

import Select from 'components/Select';
import DefaultPortrait from 'assets/images/ico-user-default.svg';

import Styles from './styles.scss';

const countries = getAllCountryObjects();

export default class Organization extends React.Component {
  
  render() {
    

    return (
      <div>
        <form autoComplete= "off">
          <h2>Organization</h2>
          <br />
          <div style= {{backgroundColor: "#fafafb", border:"1px solid #ededf2"}}>
            <h3>Add Organization</h3>
            <br />
            <div styleName= "col-md-8 col-sm-8 col-xs-8 col-lg-8">
              <p>Organization Name</p>
              <input type= "text" style= {{width: "100%"}} />
            </div>
            <div styleName= "col-md-4 col-sm-4 col-xs-4 col-lg-4">
              <p>Sector</p>
              <input type= "text" style= {{width: "100%"}} />
            </div>
            <div styleName= "col-md-3 col-sm-3 col-xs-3 col-lg-3">
              <p>City</p>
              <input type= "text" style= {{width: "100%"}} />
            </div>
            <div styleName= "col-md-3 col-sm-3 col-xs-3 col-lg-3">
              <p>From</p>
              <input type= "text" style= {{width: "100%"}} />
            </div>
            <div styleName= "col-md-2 col-sm-2 col-xs-2 col-lg-2">
              <input type= "text" style= {{width: "100%"}} />
              To
            </div>
            <div styleName= "col-md-4 col-sm-4 col-xs-4 col-lg-4">
            </div>
            <div styleName= "col-md-12 col-sm-12 col-xs-12 col-lg-12">
            <button style= {{padding: "5px", borderRadius: "4px"}}>
              Add Organization
            </button>
            </div>
          </div>
          <br />
          <div style= {{border:"1px solid #ededf2"}}>
            <h4>Organization Name</h4>
            <p>1992-1999 | Programming</p>
          </div>
          <div style= {{border:"1px solid #ededf2"}}>
          <h4>Organization Name</h4>
          <p>1992-1999 | Programming</p>
          </div>
        </form>
      </div>
    );
  }
}

Organization.defaultProps = {
 
};

Organization.propTypes = {
 };

