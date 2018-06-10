import axios from 'axios';
import Layout from '../components/Layout';

import Euro from './currency/Euro';
import Usd from './currency/Usd';
import Gbp from './currency/Gbp';

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = { loading: true, currCur: 'Usd', data: {USD: null, EUR: null, GBP: null}, time: { updated: null }, active: 'Usd' }
        this.fetch = this.fetch.bind(this);
    }

    componentWillMount(){
        this.fetch();
    }

    componentDidMount(){
        this.fetchbpi = setInterval(() => this.fetch(), 60000);
    }

    componentWillUnmount(){
        clearInterval(this.fetchbpi);
    }

    fetch() {
        console.log('tick')
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data.bpi,
                    time: res.data.time,
                    time: {
                        updated: res.data.time.updated
                    }
                });
            })
            .catch(err => {
                this.setState({
                    error:err
                });
            })
    }

    render(){

        var display;

        display = this.state.loading === true 
                    ? (
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                          <div class="circle-clipper left">
                            <div class="circle"></div>
                          </div><div class="gap-patch">
                            <div class="circle"></div>
                          </div><div class="circle-clipper right">
                            <div class="circle"></div>
                          </div>
                        </div>
                  </div>
                  ) : this.state.currCur === 'Usd' ?
                        (<Usd data={this.state.data.USD}/>) :
                          this.state.currCur === 'Eur' ?
                            (<Euro data={this.state.data.EUR}/>) :
                                this.state.currCur === 'Gbp' ?
                                   (<Gbp data={this.state.data.GBP}/>) : null;

        var active = "waves-effect waves-light btn blue lighten-1"
        var passive = "waves-effect waves-light btn blue lighten-3"

        return(
            <Layout>
                <main className="container ">
                    <br/>
                    <h5 className="center-align"><span className="blue-text text-lighten-1">Fetched Time: {this.state.time.updated}</span></h5>
                    <br/>
                    {/* <button onClick={() => console.log(this.state)}>State</button> */}
                    <div>
                        <div className="center">
                            <button className={this.state.active === 'Euro' ? active : passive} onClick={() => this.setState({ currCur: 'Eur', active: 'Euro' })}>Euro</button>
                            <button className={this.state.active === 'Usd' ? active : passive} onClick={() => this.setState({ currCur: 'Usd', active: 'Usd' })}>Usd</button>
                            <button className={this.state.active === 'Gbp' ? active : passive} onClick={() => this.setState({ currCur: 'Gbp', active: 'Gbp' })}>Gbp</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="center">
                            {display}
                        </div>
                    </div>
                </main>
            </Layout>
        )
    }
}

export default Index;