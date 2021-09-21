
import React from 'react'
import './Clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
        }
    }

    render() {
        return (

            <div className="container">

                <div className="mid-elem">
                    <h1>25 + 5 Clock</h1>
                    <div className="labels">
                        <div className="break-div">
                            <h2 id="break-label">Break Length</h2>
                            <div className="break-inc-dec">
                                <a href="#" id="break-decrement"><i class="fas fa-arrow-down"></i></a>
                                <h2 id="break-length">{this.state.breakLength}</h2>
                                <a href="#" id="break-increment"><i class="fas fa-arrow-up"></i></a>
                            </div>
                        </div>

                        <div className="session-div">
                            <h2 id="session-label">Session Length</h2>
                            <div className="session-inc-dec">
                                <a href="#" id="session-decrement"><i class="fas fa-arrow-down"></i></a>
                                <h2 id="session-length">{this.state.sessionLength}</h2>
                                <a href="#" id="session-increment"><i class="fas fa-arrow-up"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="timer">
                        <h1 id="timer-label">Session</h1>
                        <h1 id="time-left">25:00</h1>
                    </div>

                    <div className="pause-play">
                        <a href="#" id="start_stop"><i class="fas fa-play"></i>"    "</a>
                        <a href="#" id="reset"><i class="fas fa-sync"></i></a>
                    </div>

                </div>

            </div>

        )
    }

}

export default Clock;

