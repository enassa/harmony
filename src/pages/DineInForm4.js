import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood1, foood2, foood9, potbelly5, vertical } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers, sendFinalAnswers } from '../store/actions/answersActions';

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
class DineInForm4 extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendFinalAnswers(data)
        completed()
        this.props.history.push(ALL_URLS.sent)
    }
    generateAnimes = () => {
        let myArr;
        let myValue = ['🤗','😎','❤️','😍','🥰','🍒','🎃','👑','🍎','🍊','🍋','🍉','🍇','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🥪','🫓','🥙','🧆','🌮','🌯','🫔','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🦪','🍚','🥮','🥧','🍦','🍧','🍨','🧁','🥧','🍰','🎂','🍮','🍫','🍿','🍩','🍪','🌰','🥜','🥛','🍵','☕️','🫖','🧃','🥤','🧋','🍺','🍻','🥂','🍷','🥃','🍷','🥂','🥃','🍸','🧉','🧉','🍾','🍽','🥣']     
       return  myValue.map((item,index) => {
            // myArr = myValue
           return <span className=''>{item}</span>
        })
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
            <div    
                    style={{backgroundImage:`url(${potbelly5})`}} 
                    className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div  className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-more-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Submit'
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
                    fieldType: FIELDS.radioEmoji,
                    vertical:vertical,
                    groups:true,
                    followUp:{
                        followUpQuestion:'problems',
                        followUpAnswer:'Yes'
                    },
                    question:"Rate your satisfaction on how well the problem was resolved",
                    groupItems:[
                        {
                            name: "problemSatisfaction",
                            label:"😡",
                            placeholder: "😡",
                            required: true,
                        },
                        {
                            name: "problemSatisfaction",
                            label: "☹️ ",
                            placeholder: "😐",
                            required: true,
                        },
                        {
                            name: "problemSatisfaction",
                            label: "😐",
                            placeholder: "😐",
                            required: true,
                        },
                        {
                            name: "problemSatisfaction",
                            label: "😊",
                            placeholder: "😊",
                            required: true,
                        },
                        {
                            name: "problemSatisfaction",
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
                    question:"Compared to other restaurants how will you rate us?",
                    groupItems:[
                        {
                            name: "rate",
                            label: "You Do All",
                            placeholder: "You Do All",
                            required: true,
                        },
                        {
                            name: "rate",
                            label: "Just Okay",
                            placeholder: "Just Okay,",
                            required: true,
                        },
                        {
                            name: "rate",
                            label: " Apuu",
                            placeholder: " Apuu,",
                            required: true,
                        },
                        {
                            name: "rate",
                            label: "You Suck",
                            placeholder: "You Suck ",
                            required: true,
                        },
                        
                    ],
                },
                {
                    fieldType: FIELDS.select,
                    multiple:true,
                    vertical:vertical,
                    property:'name',
                    name: "sites",
                    label: "Which tourist site have you visited before?",
                    placeholder: "Which site have you visited before?",
                    dropDownList:TouristSite,
                    required: true,
                },
                {
                    fieldType: FIELDS.radioQuestion,
                    vertical:vertical,
                    groups:true,
                    question:"Do you think the Government is doing enough to promote tourism?",
                    groupItems:[
                        {
                            name: "govPromos",
                            label: "Yes",
                            placeholder: "Yes",
                            required: true,
                        },
                        {
                            name: "govPromos",
                            label: "No",
                            placeholder: "No",
                            required: true,
                        }
                    ],
                },
                {
                    fieldType: FIELDS.radioQuestion,
                    vertical:vertical,
                    groups:true,
                    question:"Will you visit a tourist site in the next 12 months?",
                    groupItems:[
                        {
                            name: "visit",
                            label: "Yes",
                            placeholder: "Yes",
                            required: true,
                        },
                        {
                            name: "visit",
                            label: "No",
                            placeholder: "No",
                            required: true,
                        }
                    ],
                },
                {
                    fieldType: FIELDS.radioQuestion,
                    vertical:vertical,
                    groups:true,
                    question:"How will you rate overall service level in our restaurants?",
                    groupItems:[
                        {
                            name: "serviceRating",
                            label: "Terrible",
                            placeholder: "Terrible",
                            required: true,
                        },
                        {
                            name: "serviceRating",
                            label: "So so",
                            placeholder: "So so",
                            required: true,
                        },
                        {
                            name: "serviceRating",
                            label: "hmmmm",
                            placeholder: "hmmmm",
                            required: true,
                        },
                        {
                            name: "serviceRating",
                            label: "Okay",
                            placeholder: "Okay",
                            required: true,
                        },
                        {
                            name: "serviceRating",
                            label: "Great",
                            placeholder: "Great",
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
        sendAnswers: (answers,serviceType) => dispatch(sendAnswers(answers,'dinein')),
        sendFinalAnswers: (answers,serviceType) => dispatch(sendFinalAnswers(answers,serviceType)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DineInForm4));
