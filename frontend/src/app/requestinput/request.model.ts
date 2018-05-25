export interface RequestData {
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    city: string;
    state: string;
    postcode: number;
    iban: string;
    incomeAgriculture: number;
    incomeSelfEmployment: number;
    incomeCapitalAssets: number;
    incomelettingAndLeasing: number;
    below18: number;
    status: string;
}


export interface CamundaData {
    variables: Variables;
    businessKey: string;
}

export interface Variables {
    firstName: TypeVal;
    lastName: TypeVal;
    emailAddress: TypeVal;
    childrenCount: TypeVal;
    city: TypeVal;
    street: TypeVal;
    state: TypeVal;
    postCode: TypeVal;
    iban: TypeVal;
    incomeX: TypeVal;
    incomeY: TypeVal;
    incomeZ: TypeVal;
    money: TypeVal; // TODO neeed to be deleted 

}

export interface TypeVal {
    type: string;
    value: string;
}
