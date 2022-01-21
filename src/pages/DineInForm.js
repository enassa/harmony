import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood1, foood2, potbelly10, potbelly3, potbelly6, potbelly7, potbelly8, potbelly9, vertical, potbelly4 } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';

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
class DineInForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        console.log(this.props.receivedData)
        completed()
        this.props.history.push(`/potbelly/forms/options/dine-in/2`)
    }
   
    render() {
       const followUpTo = {
            slayQueen:{
                followUpQuestion:'slayQueen',
                followUpAnswer:'Slay queen'
            },
            ordinaryCitizen:{
                followUpQuestion:'slayQueen',
                followUpAnswer:'Ordinary Citizen'
            }
        } 
        const innerWidth = getWindowWidth()
        return (
            <div style={{backgroundImage:`url(${potbelly10})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div style={{backdropFilter: "blur(10px)"}} className={`${innerWidth<800?'width-100-cent':'width-70-cent'} elevated-blend above-all curved-corners height-auto padding-20 `}>
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
                        //     title: "Dine-in service ",
                        //     name:"banner",
                        //     regexPattern:'#^23*&',
                        //     subtitle:"Select the service you use often",
                        //     image: potbelly4,
                        // },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"Which restaurant did you visit?",
                            groupItems:[
                                {
                                    name: "institution",
                                    label: "Adjiriganor",
                                    placeholder: "Adjiriganor ",
                                    required: true,
                                },
                                {
                                    name: "institution",
                                    label: "Amrahia",
                                    placeholder: "Amrahia",
                                    required: true,
                                },
                                {
                                    name: "institution",
                                    label: "Osu",
                                    placeholder: "Osu",
                                    required: true,
                                }
                            ],
                        },
                        {
                            fieldType: FIELDS.radioEmoji,
                            vertical:vertical,
                            groups:true,
                            question:"How satisfied were you with the cleanness of the restaurant?",
                            // style:{display:"flex",justifyContent:"center", alignItems:"center"},
                            groupItems:[
                                {
                                    name: "cleanliness",
                                    label:"😡",
                                    placeholder: "😡",
                                    required: true,
                                },
                                {
                                    name: "cleanliness",
                                    label: "☹️ ",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "cleanliness",
                                    label: "😐",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "cleanliness",
                                    label: "😊",
                                    placeholder: "😊",
                                    required: true,
                                },
                                {
                                    name: "cleanliness",
                                    label: "😍",
                                    placeholder: "😍",
                                    required: true,
                                },
                               
                            ],
                        },
                        {
                            fieldType: FIELDS.radioEmoji,
                            vertical:vertical,
                            groups:true,
                            question:"How satisfied were you with the friendliness of the staff?",
                            groupItems:[
                                {
                                    name: "friendliness",
                                    label:"😡",
                                    placeholder: "😡",
                                    required: true,
                                },
                                {
                                    name: "friendliness",
                                    label: "☹️ ",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "friendliness",
                                    label: "😐",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "friendliness",
                                    label: "😊",
                                    placeholder: "😊",
                                    required: true,
                                },
                                {
                                    name: "friendliness",
                                    label: "😍",
                                    placeholder: "😍",
                                    required: true,
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioEmoji,
                            vertical:vertical,
                            groups:true,
                            question:"How satisfied were you with the quantity of food?",
                            groupItems:[
                                {
                                    name: "foodQuantity",
                                    label:"😡",
                                    placeholder: "😡",
                                    required: true,
                                },
                                {
                                    name: "foodQuantity",
                                    label: "☹️ ",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "foodQuantity",
                                    label: "😐",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "foodQuantity",
                                    label: "😊",
                                    placeholder: "😊",
                                    required: true,
                                },
                                {
                                    name: "foodQuantity",
                                    label: "😍",
                                    placeholder: "😍",
                                    required: true,
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioEmoji,
                            vertical:vertical,
                            groups:true,
                            question:"How satisfied were you with the quality of food?",
                            groupItems:[
                                {
                                    name: "foodQuality",
                                    label:"😡",
                                    placeholder: "😡",
                                    required: true,
                                },
                                {
                                    name: "foodQuality",
                                    label: "☹️ ",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "foodQuality",
                                    label: "😐",
                                    placeholder: "😐",
                                    required: true,
                                },
                                {
                                    name: "foodQuality",
                                    label: "😊",
                                    placeholder: "😊",
                                    required: true,
                                },
                                {
                                    name: "foodQuality",
                                    label: "😍",
                                    placeholder: "😍",
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DineInForm));
