import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AllPhoto from '../components/allPhoto';
import BigPhoto from '../components/bigPhoto';
import Footer from '../components/footer';
import Header from '../components/header';
import NotFound from '../components/notFound';
import Registration from '../components/registration';
import { loadPhoto, unlikePhoto, likePhoto } from '../actions';



const PhotoSwitch = (props) => {
    const {
        state, loadPhoto, unlikePhoto, likePhoto 
    } = props;
    

    const WrapperAllPhoto = (props) => {
        return (<AllPhoto {...props} 
                 state = {state} 
                 loadPhoto = {loadPhoto} 
                 unlikePhoto = {unlikePhoto}
                 likePhoto = {likePhoto}
               />);
    }

    const WrapperBigPhoto = (props) => {
        return (<BigPhoto {...props} 
                 state = {state} 
                />);
    } 

    return (<div>
        <Switch>
            <Route exact path='/main' component={WrapperAllPhoto}/>
            <Route path='/main/photo/:number' component={WrapperBigPhoto}/>
        </Switch>     
    </div>)
    } 

const Core = (props) => {
    const {
        state, loadPhoto, unlikePhoto, likePhoto 
    } = props;

    return (<div>
        <Header />
        <PhotoSwitch 
            state = {state} 
            loadPhoto = {loadPhoto} 
            unlikePhoto = {unlikePhoto}
            likePhoto = {likePhoto}
        />
        <Footer />        
    </div>)
}    

var App = (props) => {
    const {
        state, loadPhoto, unlikePhoto, likePhoto 
    } = props;

    const WrapperRegistration = (props) => {
        return (<Registration {...props} state = {state}  />);
    }

    const WrapperCore = (props) => {
        return (<Core {...props} 
                 state = {state} 
                 loadPhoto = {loadPhoto} 
                 unlikePhoto = {unlikePhoto}
                 likePhoto = {likePhoto}
                />);
    }  

    return (
        <div>
            <Switch>
                <Route exact path='/' component={WrapperRegistration} />
                <Route path='/main' component={WrapperCore} />
                <Route path="*" component={NotFound}/>
            </Switch> 
        </div>)
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPhoto: (photos) => dispatch(loadPhoto(photos)),
        unlikePhoto: (id) => dispatch(unlikePhoto(id)),
        likePhoto: (id) => dispatch(likePhoto(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;