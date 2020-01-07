class GridHelper {

    getAroundId(state, cellId) {

        let nearId = [];

        if ((cellId + 1) % state.xNbCell !== 0) {
            nearId.push(cellId - state.xNbCell + 1);
            nearId.push(cellId + 1);
            nearId.push(cellId + state.xNbCell + 1);
        }

        if (cellId % state.xNbCell !== 0) {
            nearId.push(cellId - state.xNbCell - 1);
            nearId.push(cellId - 1);
            nearId.push(cellId + state.xNbCell - 1);
        }

        nearId.push(cellId - state.xNbCell);
        nearId.push(cellId + state.xNbCell);

        return nearId.filter((id) => {
            return id >= 0 && id <= (state.xNbCell * state.yNbCell - 1)
        }).sort((x, y) => x > y);
    };

    getNearId(state, cellId) {

        let nearId = [];

        if ((cellId + 1) % state.xNbCell !== 0) {
            nearId.push(cellId + 1);
        }

        if (cellId % state.xNbCell !== 0) {
            nearId.push(cellId - 1);
        }

        nearId.push(cellId - state.xNbCell);
        nearId.push(cellId + state.xNbCell);

        return nearId.filter((id) => {
            return id >= 0 && id <= (state.xNbCell * state.yNbCell - 1)
        }).sort((x, y) => x > y);
    };

};

export default new GridHelper();