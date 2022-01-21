import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import potbelly2 from '../assets/images/potbelly.png';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, fontFamily4, food1, foood1, foood2, foood3, foood4, foood5, foood6, foood7, foood8, potbelly1, vertical, images } from '../contants/uiConstants';
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
class RestaurantForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        console.log(this.props.receivedData)
        let institution = this.props.match.params.institution
        this.props.history.push(`/${institution}/forms/options`)
        localStorageSave('name',data.name)

        // data['institution'] = institution
        // delete data.undefined;
        // let myData =  convertToJson(data)
        // let Name = localStorageGet('institution')
        // this.props.sendAnswers(data)
        this.props.history.push(`/${institution}/forms/options`)
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
            <div style={{backgroundImage:`url(${images})`}} className={` ${innerWidth<800?'padding-0':'padding-20'}  width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} elevated-blend above-all nate-white-more-partial-bg blur curved-corners height-auto padding-20 `}>
                <FormGenerator
                    enableConfirmation={false}
                    fields = {[
                    {
                        fieldType: FIELDS.imageBanner,
                        // title: "P🥗T BELLY F🥘RM",
                        name:"banner",
                        regexPattern:'#^23*&',
                        title: "Questionnaire",
                        subtitle:"Help us make Potbelly Shack better for you",
                        image: potbelly1,
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        name: "name",
                        label: "Tell us your name?",
                        placeholder: "FirstName LastName OtherNames",
                    },
                    {
                        fieldType: FIELDS.input,
                        required:true,
                        regexPattern:REGEX_PATTERNS.phone2,
                        name: "phone",
                        label: "Phone",
                        placeholder: "eg. 050XXXXXXX",
                    },
                    {
                        fieldType: FIELDS.input,
                        name: "email",
                        label: "Email",
                        placeholder: "Email",
                        regexPattern:REGEX_PATTERNS.emailSimple,
                        required: true,
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        groups:true,
                        vertical:true,
                        question:"Are you a slay queen or ordinary citizen? (optional)",
                        groupItems:[
                            {
                                name: "slayQueen",
                                label: "Slay queen",
                                placeholder: "Slay queen",
                                required: false,
                            },
                            {
                                name: "slayQueen",
                                label: "Ordinary Citizen",
                                placeholder: "Ordinary Citizen",
                                required: false,
                            }
                        ],
                    },
            
                    {
                        fieldType: FIELDS.radioQuestion,
                        groups:true,
                        linear:true,
                        question:"Will you like to receive offers, freebies and updates from us?",
                        groupItems:[
                            {
                                name: "receiveOfferUpdates",
                                label: "Yes",
                                placeholder: "Yes",
                                required: true,
                            },
                            {
                                name: "receiveOfferUpdates",
                                label: "No",
                                placeholder: "No",
                                required: true,
                            }
                        ],
                    },
                    
                ]}
                redirectText = {"Already have an account? Login"}
                handleOnSubmit = {(data, resetFunc,completed)=>{
                    this.handleSubmit(data,resetFunc,completed)
                }}
                buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                buttonText = 'Next'
                />
                {/* {fontFamily4} */}
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(RestaurantForm));
