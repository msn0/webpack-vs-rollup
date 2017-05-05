function unusedLocal() {
    return {
        lorem: 'unused lorem local',
        ipsum: 'ipsum',
        dolor: 'dolor',
        sit: 'sit',
        amet: 'amet'
    };
}

export function unusedExported() {
    return {
        lorem: 'unused lorem exported',
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
    return usedLocal();
};
