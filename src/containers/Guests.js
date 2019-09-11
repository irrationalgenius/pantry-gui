import React, { Component } from 'react';
import { guests } from '../data';

class Guests extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thread>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Zip</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            guests.map(guest => {
                                return (
                                    <tr key={guest.id}>
                                        <td>{guest.id}</td>
                                        <td>{guest.status}</td>
                                        <td>{guest.firstname}</td>
                                        <td>{guest.lastname}</td>
                                        <td>{guest.zip}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger">
                                                Delete
                                            </button>
                                            <button type="button" className="btn btn-default">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Guests;