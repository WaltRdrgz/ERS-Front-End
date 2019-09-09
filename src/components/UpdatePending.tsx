import React from 'react';

interface Reimbursements {
    data: [],
    input: ""
}

export class UpdatePending extends React.Component<Reimbursements, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            input: "",
            author: 2,
            amount: 0,
            dateSubmitted: "",
            description: "",
            type: 0
        }
    }
    
    render() {
        const rows: any[0] = this.props.data.map((item:any, i) => {
            return <tr key={i}>
                <button>{item.reimbursementId}</button>
                <td>{item.amount}</td>
                <td>{item.author}</td>
                <td>{item.dateSubmitted}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
            </tr>
        }); 
        return( 
            <div>
                <h4>{rows[0]}</h4>
            </div>
        );
    }
    
}
