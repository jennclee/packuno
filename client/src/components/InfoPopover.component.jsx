import React from 'react';
import { findDOMNode } from 'react-dom';
import InfoIcon from 'material-ui-icons/Info';
import IconButton from 'material-ui/IconButton';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';

const categories = require('../../../data/categories.json');

class InfoPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      open: false,
      anchorEl: null,
      anchorOriginVertical: 'bottom',
      anchorOriginHorizontal: 'center',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'center',
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
      anchorReference: 'anchorEl',
      button: null,
    };
  }
  

  handleClickButton = (categoryObj) => {
    console.log('category list: ', categories.data);
    // let tempCatDes;
    // categories.data.map( (category) => {
    //   console.log('category list name: ', category.name, categoryObj.category);
    //   // console.log('selected category: ', categoryObj);
    //   console.log(category.name === categoryObj.category);

    //   // if (category.name === categoryObj.category){
    //   //   console.log(category.name, cateogryObj.category);
    //   // }
    //   if (category.name === categoryObj.category ) {
    //     console.log('category matched');
    //     tempCatDes = category.description; 
    //   }
    // });
    // this.setState({
    //   open: true,
    //   anchorEl: findDOMNode(this.state.button),
    //   description: tempCatDes,
    // });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {
    const { 
      description,
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
      button,
    } = this.state;
    const { categoryObj } = this.props;

    // const category = categoryObj.category;
    return (
      <div>
        <IconButton 
          onClick={() => this.handleClickButton({ categoryObj })}
          ref={ node => {
            this.state.button = node;
          }}
        >
          <InfoIcon />
        </IconButton>
        {/* <Popover
          open={open}
          anchorEl={anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onRequestClose={this.handleRequestClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal,
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal,
          }}
        >
          <Typography>{description}</Typography>
        </Popover> */}
      </div>
    );
  }
}

export default InfoPopover;