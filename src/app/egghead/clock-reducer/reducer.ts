export const HOUR = "HOUR";
export const SECOND = "SECOND";
export const ADVANCE = "ADVANCE";

export const clockReducer = (state = new Date(), {type, payload} = {type:"", payload:0}) => {

    console.log("clockReducer is called");
    const date = new Date(state.getTime());

    switch(type){
        case SECOND:
            date.setSeconds(date.getSeconds() + payload);
            return date;

        case HOUR:
            date.setHours(date.getHours() + payload);
            return date;
        default:
            return state;
    }
}

const defaultPeople = [
    {name: "Sara", time: clockReducer()},
    {name: "John", time: clockReducer()},
    {name: "Nancy", time: clockReducer()},
    {name: "Drew", time: clockReducer()}
]


export const peopleReducer = (state = defaultPeople, {type, payload}) =>{

    console.log("people reducer is called");

    switch(type){
        case ADVANCE:
            return state.map((person)=>{
                if(person === payload){
                    return {
                        name: person.name,
                        time: clockReducer(person.time, {type:HOUR, payload:1})
                    }
                }else{
                    return person
                }
                
            })


        default:
            return state;
    }

}
