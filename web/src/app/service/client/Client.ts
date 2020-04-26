import EventEmitter from 'events';
import { ClientEvent, ClientService } from './';

class ClientServiceImplementation implements ClientService {

  // @ts-ignore - Unsure why this isn't working
  readonly eventListener = new EventEmitter();

  constructor() {
    (window as any).FlashExternalInterface = {};

    (window as any).FlashExternalInterface.logLoginStep = (step: string) => {
      if (step === 'client.init.config.loaded') {
        this.eventListener.emit(ClientEvent.ENTERED_HOTEL);
      }
    };
  }

  enterRoom(roomID: number): void {
    console.log('Entering room: ', roomID);
    // @ts-ignore
    return document.getElementById('client-area')!.openlink('navigator/goto/' + roomID);
  }

}

export const clientService: ClientService = new ClientServiceImplementation();