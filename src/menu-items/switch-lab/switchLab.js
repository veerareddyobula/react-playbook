import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { labConstants } from './../../config/designSystemConsts'
import { MoreAnchorStyleComponent } from './../menuItem.theme'
import Bubble from './../../elements/bubble/bubble'

const SwitchLab = (props) => {
    const { options, handleOnClick } = props;
    const { useDesignSystemConsts } = options
    return (
        <div>
            {
                options && options.items.map((entity, index) => {
                    return (
                        <Bubble custom key={shortid.generate()}  onClick={(event)=>handleOnClick(event, options)} color={useDesignSystemConsts ? labConstants.LAB_COLORS[index] : entity.color}>
                            {entity.displayName}
                        </Bubble>
                    )
                })
            }
            <div>
                <MoreAnchorStyleComponent onClick={(event)=>handleOnClick(event, options.to)}>More...</MoreAnchorStyleComponent>
            </div>
        </div>
    )
}

SwitchLab.propTypes = {
    handleOnClick: PropTypes.func,
    options: PropTypes.shape({
        items: PropTypes.array
    })
}

export default SwitchLab;