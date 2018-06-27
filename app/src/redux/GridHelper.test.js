import React from 'react';
import GridHelper from './GridHelper';

describe('GridHelper', () => {

    let state = {};

    beforeAll(() => {
        const xNbCell = 50;
        const yNbCell = 30;

        let cells = {};
        let nbCells = xNbCell * yNbCell;

        for (let i of Array(nbCells).keys()) {
            cells[i] = {};
        }

        state = {
            xNbCell: xNbCell,
            yNbCell: yNbCell,
            cells: cells
        }
    });

    describe('getAroundId', () => {

        it('Should return all around id if in center of grid', () => {
            expect(GridHelper.getAroundId(state, 208)).toEqual([157, 158, 159, 207, 209, 257, 258, 259]);
        });

        it('Should return all around id if in a the right of grid', () => {
            expect(GridHelper.getAroundId(state, 149)).toEqual([98, 99, 148, 198, 199]);
        });

        it('Should return all around id if in a the top of grid', () => {
            expect(GridHelper.getAroundId(state, 24)).toEqual([23, 25, 73, 74, 75]);
        });

        it('Should return all around id if in a corner of grid', () => {
            expect(GridHelper.getAroundId(state, 1450)).toEqual([1400, 1401, 1451]);
        });

    });

    describe('getNearId', () => {

        it('Should return all near id if in center of grid', () => {
            expect(GridHelper.getNearId(state, 208)).toEqual([158, 207, 209, 258]);
        });

        it('Should return all near id if in a the right of grid', () => {
            expect(GridHelper.getNearId(state, 149)).toEqual([99, 148, 199]);
        });

        it('Should return all near id if in a the top of grid', () => {
            expect(GridHelper.getNearId(state, 24)).toEqual([23, 25, 74]);
        });

        it('Should return all near id if in a corner of grid', () => {
            expect(GridHelper.getNearId(state, 1450)).toEqual([1400, 1451]);
        });

    });

});
