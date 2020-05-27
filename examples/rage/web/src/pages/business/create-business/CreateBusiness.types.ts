export interface NewBusiness {
  name: string;
  description: string;
  badge: string;
}

export const exampleNewBusiness: NewBusiness = {
  name: '',
  description: '',
  badge: 'world',
};

export interface CreateBusinessState {
  business: NewBusiness;
  showSpinner: boolean;
}

export const defaultCreateBusinessState: CreateBusinessState = {
  business: exampleNewBusiness,
  showSpinner: false,
};
