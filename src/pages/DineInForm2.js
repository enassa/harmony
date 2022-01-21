import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, potbelly8, potbelly10, potbelly2, vertical } from '../contants/uiConstants';
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
class DineInForm2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        this.props.history.push(`/potbelly/forms/options/dine-in/3`)
        completed()
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
            <div style={{backgroundImage:`url(${potbelly2})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
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
                        //     title: "Dine-in service",
                        //     name:"banner",
                        //     regexPattern:'#^23*&',
                        //     subtitle:"Select the service you use often",
                        //     image: potbelly,
                        // },
                        {
                            fieldType:FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            required: true,
                            question:"How Long did you have to wait for your food?",
                            // style:{display:"flex",justifyContent:"center", alignItems:"center"},
                            groupItems:[
                                {
                                    name: "waiteTime",
                                    label:"Under 10 Mins",
                                    placeholder: "Under 10 Mins",
                                },
                                {
                                    name: "waiteTime",
                                    label:"20 to 30 Mins",
                                    placeholder: "20 to 30 Mins",
                                },
                                {
                                    name: "waiteTime",
                                    label:"Over 30 Mins",
                                    placeholder: "20 to 30 Mins",
                                },
                               
                               
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"How many times did the wait staff stop by your table?",
                            groupItems:[
                                {
                                    name: "waitTableStops",
                                    label: "At Least Twice",
                                    placeholder: "At Least Twice ",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "More than Twice",
                                    placeholder: "More than Twice",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "Enough",
                                    placeholder: "Enough",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "Not Enough ",
                                    placeholder: "Not Enough h",
                                },
                                
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            required: true,
                            question:"Was this your first time?",
                            groupItems:[
                                {
                                    name: "firstVisit",
                                    label: "Yes",
                                    placeholder: "Yes",
                                },
                                {
                                    name: "firstVisit",
                                    label: "No",
                                    placeholder: "No",
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"How often do you visit a year?",
                            groupItems:[
                                {
                                    name: "yearlyVisits",
                                    label: "less than 3x",
                                    placeholder: "less than 3x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "3x",
                                    placeholder: "3x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "4x",
                                    placeholder: "4x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "5x",
                                    placeholder: "5x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "More than 5x",
                                    placeholder: "More than 5x",
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            required: true,
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DineInForm2));
