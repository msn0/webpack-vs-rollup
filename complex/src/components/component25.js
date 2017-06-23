function unusedLocal() {
    return {
        lorem: 'lorem',
        ipsum: 'ipsum',
        dolor: 'dolor',
        sit: 'sit',
        amet: 'amet'
    };
}

export function unusedExported() {
    return {
        lorem: 'lorem',
        ipsum: 'ipsum',
        dolor: 'dolor',
        sit: 'sit',
        amet: 'amet'
    };
}

function usedLocal() {
    return {
        lorem: 'lorem',
        ipsum: 'ipsum',
        dolor: 'dolor',
        sit: 'sit',
        amet: 'amet'
    };
}

export default () => {
    return window.fetch('http://google.com', usedLocal());
};
