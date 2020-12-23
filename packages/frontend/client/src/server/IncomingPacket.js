import {FastDataView} from './FastDataView';

export default class IncomingPacket {
  constructor(byteArray) {
    this.dataView = new FastDataView(byteArray, 0);
    this.length = this.readInt();
    this.id = this.readShort();
  }

  readBool() {
    return this.readByte() === 1;
  }

  readByte() {
    return this.dataView.nextInt8(false);
  }

  readShort() {
    return this.dataView.nextInt16(false);
  }

  readInt() {
    return this.dataView.nextInt32(false);
  }

  readString() {
    const length = this.readShort();
    let retVal = '';

    for (let i = 0; i < length; i++)
      retVal += String.fromCharCode(this.readByte());

    return retVal;
  }
}
