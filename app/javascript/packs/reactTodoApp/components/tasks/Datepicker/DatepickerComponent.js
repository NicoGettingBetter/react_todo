import React, { Component } from 'react'
import Popover from 'react-simple-popover'
import InputMoment from 'input-moment'

class DatepickerComponent extends Component {
  render () {
    const { children, onToggle, isOpen, changeTime, time, onSaveTime } = this.props

    return (
      <span>
        <span onClick={onToggle} ref='target'>
          {children}
        </span>
        <Popover
          show={isOpen}
          target={this.refs.target}
          onHide={onToggle}
          style={{width: '358px'}}
        >
          <InputMoment
            moment={time}
            onChange={(time) => changeTime(time)}
            onSave={onSaveTime}
          />
        </Popover>
      </span>
    )
  }
}

export default DatepickerComponent
