class Rules {
  checkRule(): void {
    console.log('rule');
    this.checkE();
  }

  private checkE(): void {
    console.log('check fail');
  }
}

export const rules = new Rules();
