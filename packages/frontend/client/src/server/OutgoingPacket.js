export default class OutgoingPacket {
  constructor(opCode) {
    this.byteArray = new Int8Array(16);

    this.writerIndex = 0;

    this.writeInt32(0);
    this.writeInt16(opCode);
  }

  /**
   * Write a single byte to the array.
   * @param {number} value
   */
  writeInt8(value) {
    this.expand(1);

    this.byteArray[this.writerIndex++] = value;
  }

  /**
   *
   * @param {number} value
   */
  writeInt16(value) {
    this.expand(2);

    this.byteArray[this.writerIndex++] = value >>> 8;
    this.byteArray[this.writerIndex++] = value;
  }

  /**
   *
   * @param {number} value
   */
  writeInt32(value) {
    this.expand(4);

    this.writeInt32At(value, this.writerIndex);
    this.writerIndex += 4;
  }

  /**
   * @see writeInt32
   * @param value
   * @param index
   */
  writeInt32At(value, index) {
    this.byteArray[index] = value >>> 24;
    this.byteArray[index + 1] = value >>> 16;
    this.byteArray[index + 2] = value >>> 8;
    this.byteArray[index + 3] = value;
  }

  /**
   *
   * @param {string} value
   */
  writeUTF8(value) {
    this.expand(2 + value.length);

    this.writeInt16(value.length);

    for (let i = 0; i < value.length; i++) {
      this.byteArray[this.writerIndex++] = value.charCodeAt(i);
    }
  }

  /**
   * @returns Int8Array
   */
  getBytes() {
    this.writeInt32At(this.writerIndex - 4, 0);

    const array = new Int8Array(this.byteArray.length);
    for (let i = 0; i < this.byteArray.length; i++) {
      array[i] = this.byteArray[i];
    }

    this.byteArray = array;

    return this.byteArray;
  }

  getWriterIndex() {
    return this.writerIndex;
  }

  /**
   *
   * @param {number} bytesNeeded
   */
  expand(bytesNeeded) {
    if (this.byteArray.byteLength > this.writerIndex + bytesNeeded) return;

    const newBuff = new Int8Array(this.byteArray.byteLength * 2);

    for (let i = 0; i < this.byteArray.byteLength; i++) {
      newBuff[i] = this.byteArray[i];
    }

    this.byteArray = newBuff;
  }
}
