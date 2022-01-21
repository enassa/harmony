import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, foood3, potbelly3, potbelly8, potbelly9, vertical } from '../contants/uiConstants';
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
class DineInForm3 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        this.props.history.push(`/potbelly/forms/options/dine-in/4`)
        completed()
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
            <div style={{backgroundImage:`url(${potbelly3})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
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
                        //     title: "P🥗T BELLY F🥘RM",
                        //     title: "Dine-in service",
                        //     name:"banner",
                        //     regexPattern:'#^23*&',
                        //     subtitle:"Select the service you use often",
                        //     image: potbelly,
                        // },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"Was the music volume to your liking?",
                            groupItems:[
                                {
                                    name: "musicVolume",
                                    label: "Yes",
                                    placeholder: "Yes",
                                    required: true,
                                },
                                {
                                    name: "musicVolume",
                                    label: "No",
                                    placeholder: "No",
                                    required: true,
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.select,
                            multiple:true,
                            vertical:vertical,
                            property:'name',
                            name: "orderInfo",
                            label: "What did you order?",
                            placeholder: "What did you order?",
                            dropDownList:FoodMenu,
                            required: true,
                            },
                            {
                            fieldType: FIELDS.select,
                            property:'name',
                            name: "menuFavorite",
                            label: "What is your favourite on our menu?",
                            placeholder: "What is your favourite on our menu?",
                            dropDownList:FoodMenu,
                            required: true,
                            },
                            {
                                fieldType: FIELDS.radioQuestion,
                                vertical:vertical,
                                groups:true,
                                question:"Did music influence your overall satisfaction?",
                                groupItems:[
                                    {
                                        name: "musicInfluence",
                                        label: "Yes",
                                        placeholder: "Yes",
                                        required: true,
                                    },
                                    {
                                        name: "musicInfluence",
                                        label: "No",
                                        placeholder: "No",
                                        required: true,
                                    },
                                ],
                            },
                            {
                                fieldType: FIELDS.radioQuestion,
                                vertical:vertical,
                                groups:true,
                                question:"Did you encounter any problems during your last visit?",
                                groupItems:[
                                    {
                                        name: "problems",
                                        label: "Yes",
                                        placeholder: "Yes",
                                        required: true,
                                    },
                                    {
                                        name: "problems",
                                        label: "No",
                                        placeholder: "No",
                                        required: true,
                                    },
                                ],
                            },
                            {
                            fieldType: FIELDS.radioQuestion,
                            vertical:true,
                            followUp:{
                                followUpQuestion:'problems',
                                followUpAnswer:'Yes'
                            },
                            groups:true,
                            question:"What problem was it?",
                            groupItems:[
                                {
                                    name: "whatProblem",
                                    label: "Speed of Service",
                                    placeholder: "Speed of Service",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "Accuracy of Oder",
                                    placeholder: "Accuracy of Oder",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "Taste of Food",
                                    placeholder: "Taste of Food",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "Availability of Items",
                                    placeholder: "Availability of Items",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "Taste of Beverage",
                                    placeholder: "Taste of Beverage ",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "The cleanliness of the restaurant",
                                    placeholder: "The cleanliness of the restaurant",
                                    required: true,
                                },
                                {
                                    name: "whatProblem",
                                    label: "Friendliness of Staff",
                                    placeholder: "Friendliness of Staff",
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DineInForm3));
