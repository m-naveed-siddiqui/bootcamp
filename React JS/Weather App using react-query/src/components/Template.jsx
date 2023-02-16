function Template({...props}) {
    return (
        <div>
            <form action="javacsript:;">
                <h2><strong>Find Weather</strong></h2>
                <br/>
                <div className="form-group">
                    <input type="search" className="form-control"
                        onChange={(e) => props.setArea(e.target.value)} placeholder="Enter Place Name" />
                </div>
                <div className="form-group">
                    <button onClick={props.findWeather} className="btn btn-info">Find</button>
                </div>
            </form>

            <div className="container">
                {props.isLoading && "Loading..."}
                {props.error && "An error has occurred: " + props.error.message}
                {props.isFetching ? "Updating..." : ""}
                {Object.keys(props.data).length != 0 && (
                    <>
                        <div class="card card-1">
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="temp">{props.data.current.temp_c}<sup>&deg;C</sup></div>
                                                <div class="location">{props.data.location.name+', '+props.data.location.country}</div>
                                            </div>
                                            <div class="col-6 justify-content-right">
                                                <img class="img-fluid" src={props.data.current.condition.icon} alt={props.data.current.condition.text}/>
                                                <big>({props.data.current.condition.text})</big>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-3">
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row row1">{props.data.current.feelslike_c}&deg;C</div>
                                                <div class="row row2"><img class="img-fluid"
                                                    src="https://img.icons8.com/metro/26/null/temperature.png" /></div>
                                                <div class="row row3">Feels Like</div>
                                            </div>
                                            <div class="col">
                                                <div class="row row1">{props.data.current.wind_kph} km/h</div>
                                                <div class="row row2">
                                                    <img class="img-fluid" src="https://img.icons8.com/metro/26/null/dry.png" />
                                                </div>
                                                <div class="row row3">Wind</div>
                                            </div>
                                            <div class="col">
                                                <div class="row row1">{props.data.current.wind_dir}&deg;</div>
                                                <div class="row row2"><img class="img-fluid"
                                                    src="https://img.icons8.com/metro/26/null/north-direction.png" /></div>
                                                <div class="row row3">Wind Dir</div>
                                            </div>
                                            <div class="col">
                                                <div class="row row1">{props.data.current.humidity}%</div>
                                                <div class="row row2"><img class="img-fluid"
                                                    src="https://img.icons8.com/metro/26/null/humidity.png" /></div>
                                                <div class="row row3">Humidity</div>
                                            </div>
                                            <div class="col">
                                                <div class="row row1">{props.data.current.cloud}%</div>
                                                <div class="row row2"><img class="img-fluid"
                                                    src="https://img.icons8.com/windows/100/000000/cloud.png" /></div>
                                                <div class="row row3">Cloud Cover</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>     
                    </>
                )}
            </div>
        </div>
    );
}

export default Template;