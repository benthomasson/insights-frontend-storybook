import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

// Component
import { Gauge } from '@red-hat-insights/insights-frontend-components';

// README
import GaugeReadme from '../../docs/charts/gauge/README.md';
import { withReadme }  from 'storybook-readme';

storiesOf('Charts', module)
    .addDecorator(withReadme(GaugeReadme))
    .addDecorator(withKnobs)
    .addWithChapters(
        'Gauge',
        {
            chapters: [
                {
                    title: 'Demo',
                    subtitle: 'Use the "Knobs" tab in the addon panel to use interactive preview',
                    sections: [
                        {
                            title: 'Preview',
                            sectionFn: ('', () => {
                                const options = {
                                    range: true,
                                    min: 0,
                                    max: 100,
                                    step: 1,
                                 };
                                
                                return(
                                    <Gauge flipFullColors={boolean('Flip Colors', false)} identifier='sample-gauge' label='sample-gauge' height={250} value={number('Value', 10, options)}/>
                                )
                            })
                        },
                    ],
                }
            ]
        }
    )