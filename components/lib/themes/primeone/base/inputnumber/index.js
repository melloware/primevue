export default {
    css: ({ dt }) => `
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    background: ${dt('inputnumber.button.background')};
    color: ${dt('inputnumber.button.color')};
    width: ${dt('inputnumber.button.width')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-inputnumber-button:hover {
    background: ${dt('inputnumber.button.hover.background')};
    color: ${dt('inputnumber.button.hover.color')};
}

.p-inputnumber-button:active {
    background: ${dt('inputnumber.button.active.background')};
    color: ${dt('inputnumber.button.active.color')};
}

.p-inputnumber-stacked {
    overflow: hidden;
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    right: 1px;
    height: calc(100% - 2px);
}

.p-inputnumber-stacked .p-inputnumber-button-up {
    padding: 0;
    border-top-right-radius: calc(${dt('rounded.base')} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button-down {
    padding: 0;
    border-bottom-right-radius: calc(${dt('rounded.base')} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${dt('inputnumber.button.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${dt('inputnumber.button.hover.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${dt('inputnumber.button.active.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-button-up {
    order: 3;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
    border-left: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-button-down {
    order: 1;
    border-top-left-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
    border-right: 0 none;
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${dt('inputnumber.button.border.color')};
    padding: 0.5rem 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${dt('inputnumber.button.hover.border.color')};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${dt('inputnumber.button.active.border.color')};
}

.p-inputnumber-vertical .p-inputnumber-button-up {
    order: 1;
    border-top-left-radius: ${dt('rounded.base')};
    border-top-right-radius: ${dt('rounded.base')};
    width: 100%;
    border-bottom: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-button-down {
    order: 3;
    border-bottom-left-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
    width: 100%;
    border-top: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}
`
};