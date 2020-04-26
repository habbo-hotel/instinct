import { ClientService } from './';

class ClientServiceImplementation implements ClientService {

  constructor() {
    (window as any).FlashExternalInterface = {};

    (window as any).FlashExternalInterface.logLoginStep = (step: string) => {
      console.log(step);
    };
  }

  enterRoom(roomID: number): void {
    console.log('Entering room: ', roomID);
    // @ts-ignore
    return document.getElementById('client-area')!.openlink('navigator/goto/' + roomID);
  }

}

export const clientService: ClientService = new ClientServiceImplementation();