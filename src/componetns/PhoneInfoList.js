import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [],  
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList')
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(   //data 배열을 가져와 map을 통하여 JSX롷 변환
            info => (
                <PhoneInfo 
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;