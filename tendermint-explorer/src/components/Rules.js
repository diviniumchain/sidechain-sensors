import React, { Component } from 'react';
import { Button, Container, InputGroup, Input, InputGroupAddon, Row, Label, FormGroup } from 'reactstrap';
import _ from 'lodash';

import '../App.css';

// Component

class Rules extends Component {

    buildFromRules (rules) {
        if (rules === undefined || rules === "") return null
        if (rules.length % 2 == 0) return null
        if (rules.length < 4) return null

        const chunks = _.chunk(rules, 2)
        const settingsLength = parseInt(chunks[0].join(''))
        const settings = _.chunk(chunks.slice(1, chunks.length), 3)
        
        const reduceToComponents = _.bind(settings => _.reduce(settings, ([result, acc, self], s) => {
            const val = parseInt(s.join(''));
            if (acc == 1) return [result.concat(self.renderFormGroup("max", "Max temperature", acc, val)), acc + 1, self]
            if (acc == 2) return [result.concat(self.renderFormGroup("min", "Min temperature", acc, val)), acc + 1, self]
            if (acc == 3) return [result.concat(self.renderFormGroup("time", "Time", acc, val)), acc + 1, self]
        }, [[], 1, this]), this)

        const result = _.map(settings, el => { 
            let result, ev
            [result, ...ev] = reduceToComponents(el)

            return result
        })
        
        return result;
    }

    // Render

    renderFormGroup = (id, title, key, value) => (
        <FormGroup key={ key }>
            <Label for={ id }>{ title }</Label>
            <Input id={ id } disabled="true" defaultValue={ value }/>
        </FormGroup>
    )

    render () {
        return (
            <div className="rules">
                { this.buildFromRules(this.props.rules) }
            </div>
        )
    }
}

export default Rules
