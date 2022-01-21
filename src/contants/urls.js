import { localStorageGet } from "./generalFunctions";

const domainName = "http://almamaterworld.com:8082"



export  const ALL_URLS  = {
    base:"/",

    // harmony Links
    institution: '/:institution/admin',
    office: '/:institution/:office',
    adminDashboard: "/:institution/admin/dashbord",
    awaitingList: "/:institution/admin/awaiting",
    approvedList: "/:institution/admin/approved",
    agentPage: "/:institution/agent",
    // main urls
    results:"/:institution/dashboard",
    restaurant:"/:institution/forms",
    options:"/:institution/forms/options",
    deliveryService1:"/:institution/forms/options/delivery/1",
    deliveryService2:"/:institution/forms/options/delivery/2",
    deliveryService3:"/:institution/forms/options/delivery/3",
    deliveryService4:"/:institution/forms/options/delivery/4",
    dineInService1:"/:institution/forms/options/dine-in/1",
    dineInService2:"/:institution/forms/options/dine-in/2",
    dineInService3:"/:institution/forms/options/dine-in/3",
    dineInService4:"/:institution/forms/options/dine-in/4",
    takeOutService1:"/:institution/forms/options/take-outs/1",
    takeOutService2:"/:institution/forms/options/take-outs/2",
    takeOutService3:"/:institution/forms/options/take-outs/3",
    takeOutService4:"/:institution/forms/options/take-outs/4",

    dashboard:"/:institution/dashboard/:serviceType",
    // takeOutDashboard:"/:institution/dashboard/take-out",
    // dineinDashboard:"/:institution/dashboard/dine-in",
    tourism:"/tourism",
    // dashboard:"/dashboard",
    responses:"/:institution/responses",
    
    answererDetails:"/user/:id",
    answerDetails:"/answer/:id",
    sent:"/sent",
    statistics:"/statistics",
    admin:"/admin",
    anyOther:"*",
    productionBase:'http://almamaterworld.com:8081',
    // login urls
    memberHome:"/member/home",
    loginMember:"/login/member",
    loginGroupAdmin:"/login/group_admin",
    loginOrganisationAdmin:"/login/organisation_admin",
    // registeration urls
    registerMember:"/register/member",
    registerGroupAdmin:"/register/group_admin",
    registerOrganisationAdmin:"/register/organisation_admin",
    // Password Reset
    resetMember:"/reset/member",
    resetGroupAdmin:"/reset/group_admin",
    resetOrganisationAdmin:"/reset/organisation_admin",
    // verify
    verifyMember:"/verify/member",
    verifyGroupAdmin:"/verify/group_admin",
    verifyOrganisationAdmin:"/verify/organisation_admin",
    // Organisation Admin
    organisationAdminDashbord:"/organisation_admin/dashboard",
    organisationAdminViewGroup:"/organisation_admin/view_group",
    organisationAdminCreateGroup:"/organisation_admin/create_group",
    organisationAdminCreateProject:"/organisation_admin/create_project",
    organisationAdminCreateNews:"/organisation_admin/create_news",
    organisationAdminSendNotification:"/organisation_admin/send_notification",
    organisationAdminSettings:"/organisation_admin/settings",
    // Member 
    memberPage:"/member/:page",
    memberListProjects:"/member/projects",
    memberViewProject:"/member/projects/:id",
    memberListNews:"/member/news",
    memberViewNews:"/member/news/:id",
    memberListAlbums:"/member/albums",
    memberListGroups:"/member/groups",
    memberListPayments:"/member/payments",
    memberViewAlbums:"/member/albums/:id",
    memberListInstitutions:"/member/institutions",
    memberViewInstitutions:"/member/institutions/:id",
    memberViewGroup:"/member/groups/:id",
    memberContribute:"/member/projects/contribute/:id",
    memberListActivities:"/member/projects/:stage/:id",
    // MemberListPictures:"/member/:albums/:id",
    memberListProjectDetail:"/member/projects/:id/:detail",
    responsePage:"/action_response/:page",
    responsePageBase:"/action_response",
    
}
export  const ACTORS = {
    actorOne:"Super admin",
    actorTwo:"Organisation admin",
    actorThree:"Group Admin",
    actorFour:"Member",
}
export const TOKEN = {
    devToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXMiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9hbG1hbWF0ZXJ3b3JsZC5jb206ODA4Mi9hcGkvbG9naW4iLCJleHAiOjIxMDUwOTM1NzN9.I_gtRfFJaPixpn-OaW21enqwLBn8U60nPhRSkIzLdTo",
    paymentToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXMiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly8xNTAuMjMwLjExMy4xOTk6ODA4My9hcGkvbG9naW4iLCJleHAiOjE3OTEyMTYxNDB9.r3DNKJ5Wz2ftF2Arci3jBjuN1fh2rFNv1Tx2ukjm52M"
}

let serviceType = 'delivery'

let devMode = false;
const base_url = devMode?'https://0f75-154-160-4-78.ngrok.io':`https://dev.api.harmonylife.io`;

export const URL_END_POINTS = {
    REGISTER:`${domainName}/api/User/createUser/`,
    LOGIN_FACILITY:`${base_url}/auth/authenticate`,
    GET_ANSWERS_BY_FILTER:`${base_url}/application/start`,//
    UPDATE_RECORDS:`${base_url}/application/updateApplication`,
    RESET:`${domainName}/api/User/resetUser`,
    GET_PROJECTS:'https://jsonplaceholder.typicode.com/photos',
    GET_NEWS:'https://jsonplaceholder.typicode.com/posts',
    GET_INSTITUTIONS:'https://jsonplaceholder.typicode.com/photos',
    GET_PICTURES:'https://jsonplaceholder.typicode.com/albums/1/photos',
    GET_ANNOUNCEMENT:'https://jsonplaceholder.typicode.com/comments',
    GET_CONTRIBUTERS:'https://jsonplaceholder.typicode.com/photos',
    GET_PROJECTS_STATUS_UPDATE:'https://jsonplaceholder.typicode.com/photos',
    GET_GROUPS:'https://jsonplaceholder.typicode.com/photos',
    GET_JOINED_GROUPS:'https://jsonplaceholder.typicode.com/photos',
    GET_PAYMENTS:'https://jsonplaceholder.typicode.com/comments',
    PRODUCTION_BASE_URL:'http://almamaterworld.com:8081/',
    MAKE_PAYMENT:`http://150.230.113.199:8083/api/createInvoice`,
// Questionnaire

    SUBMIT_ANSWERS:`${base_url}/save`,//save a single object
    EDIT_ANSWERS:`${base_url}/edit`,//edit answers
    GET_ANSWERS_BY_PHONE:`${base_url}/phone`,
    GET_ANSWERS_BY_NAME:`${base_url}/name`,
    GET_ANSWERS_BY_EMAIL:`${base_url}/email`,//
    GET_ANSWERS_BY_ID:`${base_url}/id`,//
    GET_ANSWERS_BY_INSTITUTION:`${base_url}/institution`,//

    GET_ANSWERS:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERERS:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERERS_OF_ANSWER:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERS_OF_ANSWERER:"https://jsonplaceholder.typicode.com/posts",

    GET_FROM_LUX:'https://luxcom-web-api.herokuapp.com/api/reservation/initial/'
    
}

// delivery-controller

// YYY-MM-DD
// POST
// /delivery/save

// GET
// /delivery/start/{start}/end/{end}

// GET
// /delivery/start/{start}/end/{end}/page/{page}/pageSize/{pageSize}

