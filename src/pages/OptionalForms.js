import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import potbelly from '../assets/images/potbelly.jpeg';
import { getWindowWidth } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';
import { openSnackBar } from '../store/actions/generalActions';
import SnackBar from '../component_bag/SnackBars';
import GroupCard from '../component_bag/GroupCard';
import { randomImages } from '../dummydata/dummyData';

let myData =  undefined;
let emptyButRequired = [];
let regexErrs = []
let cardData = undefined
class OptionalForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            expanded:[],
            formFillingStarted:false,
            emptyRequiredFields:[],
            regexErrors:[],
            data:{}
        }
    }
    handleSubmit = (data,field,completed) => {
        console.log(emptyButRequired)
        if(this.state.formFillingStarted!==true){
            this.props.openSnackBar(`Please fill one of the forms below`)
            return
        }
        // if(emptyButRequired.length>=3){
        //     this.props.openSnackBar(`Please ensure all required fields are filled`)
        //     console.log(emptyButRequired)
        //     return
        // }
       if(regexErrs.length !==0){
            this.props.openSnackBar(`Invalid inputs`)
            return
        }
        this.props.sendAnswers(myData)
        this.props.history.push(ALL_URLS.sent)
    }
    ejectCards() {
          return cardData.map((data, index)=>{
            return  <GroupCard cardData={data} outerStyles={{minWidth:200}}/>
          })

    }
     
    render() {
        const innerWidth = getWindowWidth()
        cardData = [
            {
                id:1,
                image:randomImages,
                groupName:"Delivery Services",
                url:"/potbelly"
            },
            {
                id:2,
                image:randomImages,
                groupName:"Dine in Services",
                url:"no-forms"
            },
            
        ]
        return (
            <div style={{backgroundColor:"F3F3F3"}} className='width-100-cent height-100-cent nate-white-bg  a-center padding-20 y-scroll f-column j-start'>
               {this.props.snackBarState?<SnackBar/>:null}
                <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} above-all curved-corners height-auto elevated-blend padding-20 `}>
                <FormGenerator
                removeButton
                 fields = {[
                    {
                        fieldType: FIELDS.imageBanner,
                        // title: "P🥗T BELLY F🥘RM",
                        title: "Which service did you use?",
                        name:"banner",
                        regexPattern:'#^23*&',
                        subtitle:"Select the service you use often",
                        image: potbelly,
                    }
                ]}
                >
                </FormGenerator>
                <div className='width-100-cent height-500 j-center padding-t-50 padding-b-50'>
                    {this.ejectCards()}
                </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
        openSnackBar: (message,snacType) => dispatch(openSnackBar(message,snacType)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
        snackBarState:state.generalReducer.snackBarState,
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OptionalForm));
