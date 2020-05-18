import React from 'react';
import {
    comparePointsAsc,
    comparePointsDesc,
    compareCountAsc,
    compareCountDesc,
    compareValidityAsc,
    compareValidityDesc
} from './CompareForSort'

describe('CompareForSort_Component', () => {
    it('should test comparePointsAsc with -1', () => {
        let a = {
            cardPoints: 12
        }
        let b = {
            cardPoints: 13
        }
        const value = comparePointsAsc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test comparePointsAsc with 1', () => {
        let a = {
            cardPoints: 13
        }
        let b = {
            cardPoints: 12
        }
        const value = comparePointsAsc(a,b);
        expect(value).toEqual(1);
    });
    it('should test comparePointsDesc with -1', () => {
        let a = {
            cardPoints: 12
        }
        let b = {
            cardPoints: 13
        }
        const value = comparePointsDesc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test comparePointsDesc with 1', () => {
        let a = {
            cardPoints: 13
        }
        let b = {
            cardPoints: 12
        }
        const value = comparePointsDesc(a,b);
        expect(value).toEqual(1);
    });
    it('should test compareCountAsc with -1', () => {
        let a = {
            cardCount: 12
        }
        let b = {
            cardCount: 13
        }
        const value = compareCountAsc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test compareCountAsc with 1', () => {
        let a = {
            cardCount: 13
        }
        let b = {
            cardCount: 12
        }
        const value = compareCountAsc(a,b);
        expect(value).toEqual(1);
    });
    it('should test compareCountDesc with -1', () => {
        let a = {
            cardCount: 12
        }
        let b = {
            cardCount: 13
        }
        const value = compareCountDesc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test compareCountDesc with 1', () => {
        let a = {
            cardCount: 13
        }
        let b = {
            cardCount: 12
        }
        const value = compareCountDesc(a,b);
        expect(value).toEqual(1);
    });
    it('should test compareValidityAsc with -1', () => {
        let a = {
            cardExpiryDate: 12
        }
        let b = {
            cardExpiryDate: 13
        }
        const value = compareValidityAsc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test compareValidityAsc with 1', () => {
        let a = {
            cardExpiryDate: 13
        }
        let b = {
            cardExpiryDate: 12
        }
        const value = compareValidityAsc(a,b);
        expect(value).toEqual(1);
    });
    it('should test compareValidityDesc with -1', () => {
        let a = {
            cardExpiryDate: 12
        }
        let b = {
            cardExpiryDate: 13
        }
        const value = compareValidityDesc(a,b);
        expect(value).toEqual(-1);
    });
    it('should test compareValidityDesc with 1', () => {
        let a = {
            cardExpiryDate: 13
        }
        let b = {
            cardExpiryDate: 12
        }
        const value = compareValidityDesc(a,b);
        expect(value).toEqual(1);
    });
})