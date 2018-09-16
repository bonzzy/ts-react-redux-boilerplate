import expect from 'expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from'axios';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mockAxios = new MockAdapter(axios);

describe('Example', () => {


    beforeAll(() => {
    });

    it('should be true', () => {
        const store = mockStore({ foo: {} });
        expect("test").toEqual("test");
    });
});