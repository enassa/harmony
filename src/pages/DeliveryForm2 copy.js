import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood4, potbelly3, vertical } from '../contants/uiConstants';
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
class DeliveryForm2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,field,fields) => {
        let institution = this.props.match.params.institution
        delete data.undefined;
        let myData =  convertToJson(data)
        console.log(data)
        this.props.history.push(`/potbelly/forms/options/delivery/3`)

        // this.props.history.push(ALL_URLS.sent)
    }
   
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly3})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-more-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Submit'
                    fields = {[
                   
                    // {
                    //     fieldType: FIELDS.imageBanner,
                    //     title: "P🥗T BELLY F🥘RM",
                    //     title: "Delivery Service",
                    //     name:"banner",
                    //     regexPattern:'#^23*&',
                    //     subtitle:"Select the service you use often",
                    //     image: potbelly,
                    // },
                    
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
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        question:"Will you recommend us to a friend?",
                        groupItems:[
                            {
                                name: "recommend", 
                                label: "Yes",
                                placeholder: "Yes",
                                required: true,
                            },
                            {
                                name: "recommend",
                                label: "Maybe",
                                placeholder: "Maybe",
                                required: true,
                            },
                            {
                                name: "recommend",
                                label: "Hell No",
                                placeholder: "Hell No",
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeliveryForm2));
