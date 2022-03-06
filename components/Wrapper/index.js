import React, {useEffect} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import {Counter} from "../../components";

const Wrapper = ({children}) => {
    console.log('*** Hello from wrapper');

    // useEffect(() => {
    //     Ext.define('MyExtGenApp.view.main.MainView', {
    //         extend: 'Ext.Container',
    //         xtype: 'mainview',
    //         controller: 'mainviewcontroller',
    //         viewModel: {
    //             type: 'mainviewmodel'
    //         },
    //         requires: [
    //             'Ext.layout.Fit'
    //         ],
    //         layout: 'fit',
    //         items: [
    //             { xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
    //             { xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
    //             { xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
    //             { xtype: 'centerview', reference: 'centerview' },
    //             { xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
    //         ],
    //         listeners: {
    //             activate: view => {
    //                 console.log('***', {view});
    //                 Ext.getBody().removeCls('launching')
    //                 var elem = document.getElementById("splash")
    //                 elem.parentNode.removeChild(elem)
    //
    //                 var whichView = 'mainview'
    //                 Ext.Viewport.add([{xtype: whichView}])
    //             }
    //         }
    //     });
    //
    // }, []);

    return (
        <Provider store={store}>
            <div style={{border: 'solid 5px red'}}>
                <div id="extjs_app">
                    <Counter/>
                    <div className="launching">
                        <div id="splash">
                            <div id="theLoadingText">LOADING...</div>
                            <i className="fa fa-spinner fa-spin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Wrapper;