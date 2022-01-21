import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth } from '../contants/generalFunctions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';
import { foood2, potbelly12, vertical } from '../contants/uiConstants';

const TouristSite = [
    {
        name:"Mole Park"
    },
    {
        name:"Kakum National Park"
    },
    {
        name:"Cape Coast Castle"
    },
    {
        name:"Elmina Castle"
    },
    {
        name:"National Museum"
    },
    {
        name:"Aburi Botanical Garden"
    },
    {
        name:"Mountain Afadjato "
    },
    {
        name:"W.E.B. Dubois Centre " 
    },
    {
        name:"Manhyia Palace " 
    },
    {
        name:"Boabeng Fiema Monkey Sanctuary" 
    },
    {
        name:"Kintampo Balls" 
    },
    {
        name:"Tango Hills"
    },
    {
        name:"Cape Three Points " 
    },
    {
        name:"Kumasi Zoo" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Paga Zenga Crocodile Pond" 
    },
    {
        name:"Xavi Bird Sanctuary " 
    },
    {
        name:"Labadi Beach" 
    },
    {
        name:"Lake Bosomtwe" 
    },
    {
        name:"Wli Waterfalls" 
    },
    {
        name:"Lakeside Marina Park" 
    },
    {
        name:"The Manhyia Palace" 
    },
    {
        name:"Kwame Nkrumah Memorial Park and Mausoleum" 
    },
    {
        name:"Boti Falls" 
    },
    {
        name:"St Agustine College " 
    },
]
const FoodMenu = [
    {
        name:"Chicken Wings"
    },
    {
        name:"Pizza"
    },
    {
        name:"Burgers"
    },
    {
        name:"Meatballs"
    },
    {
        name:"BBQ Ribs"
    },
    {
        name:"Tacos"
    },
    {
        name:"Pasta"
    },
    {
        name:"Asian Fusion" 
    },
    {
        name:"Hotdogs" 
    },
    {
        name:"Fish and Chips" 
    },
    {
        name:"Full Chicken" 
    },
    {
        name:"Steaks"
    },
    {
        name:"Seafood" 
    },
    {
        name:"Salad" 
    },
    {
        name:"Breakfast" 
    },
    {
        name:"Others" 
    },
]
class TakoutsForm2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
 
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        completed()
        this.props.history.push(`/potbelly/forms/options/take-outs/3`)
    }
   
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly12})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div style={{backdropFilter: "blur(3px)"}} className={`${innerWidth<800?'width-100-cent':'width-70-cent'} elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Next'
                    fields = {[
                   
                    // {
                    //     fieldType: FIELDS.imageBanner,
                    //     // title: "P🥗T BELLY F🥘RM",
                    //     title: "Take-Out Services",
                    //     name:"banner",
                    //     regexPattern:'#^23*&',
                    //     subtitle:"Select the service you use often",
                    //     image: potbelly,
                    // },
                        
                        {
                        fieldType:FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"How long did you have to wait for your food?",
                        // style:{display:"flex",justifyContent:"center", alignItems:"center"},
                        groupItems:[
                            {
                                name: "waiteTime",
                                label:"Under 10 Mins",
                                placeholder: "Under 10 Mins",
                                required: true,
                            },
                            {
                                name: "waiteTime",
                                label:"20 to 30 Mins",
                                placeholder: "20 to 30 Mins",
                                required: true,
                            },
                            {
                                name: "waiteTime",
                                label:"Over 30 Mins",
                                placeholder: "20 to 30 Mins",
                                required: true,
                            },
                           
                           
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"Was the order accurate?",
                        groupItems:[
                            {
                                name: "accuracyOfOrder",
                                label:"Yes",
                                placeholder: "Yes",
                                required: true,
                            },
                            {
                                name: "accuracyOfOrder",
                                label:"No",
                                placeholder: "No",
                                required: true,
                            },
                            {
                                name: "accuracyOfOrder",
                                label:"Missing products",
                                placeholder: "Missing products",
                                required: true,
                            },
                            {
                                name: "accuracyOfOrder",
                                label:"Wrong products",
                                placeholder: "Wrong products",
                                required: true,
                            },
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"How often do you opt for delivery?",
                        groupItems:[
                            {
                                name: "weeklyVisits",
                                label: "Once a week",
                                placeholder: "less than 3x",
                                required: true,
                            },
                            {
                                name: "weeklyVisits",
                                label: "Twice a week",
                                placeholder: "Twice a week",
                                required: true,
                            },
                            {
                                name: "weeklyVisits",
                                label: "Once a month",
                                placeholder: "Once a month",
                                required: true,
                            },
                        ],
                    },
                ]}
                />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TakoutsForm2));
