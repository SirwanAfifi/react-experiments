import React from 'react';
export function ProFeature(FeatureComponent) {
    return function (props) {
        if (props.pro) {
            const { pro, ...childProps } = props;
            return <FeatureComponent {...childProps} />
        } else {
            <h5 className="bg-warning text-white text-center">
                This is a Pro Feature
            </h5>
        }
    }
}