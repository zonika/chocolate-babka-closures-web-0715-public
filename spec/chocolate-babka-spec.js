describe('Chocolate Babka Counter', function() {
  describe('basic counter closure accepting a starting number', function() {  
    var bakeryCounter = counterCreator(0);
    it('should increment the number', function() {
      expect(bakeryCounter()).toEqual(1);
    });
    it('should keep track of the count', function() {
      expect(bakeryCounter()).toEqual(2);
      expect(bakeryCounter()).toEqual(3);
    });
  });
  describe('Has a seperate bakery counter and babka counter', function() {
    it('should increment only one counter', function() {
      var bakeryCounter = counterCreator(3),
      babkaCounter = counterCreator(5);

      expect(bakeryCounter()).toEqual(4);
      expect(babkaCounter()).toEqual(6);
    });
  });
});

describe('Line number announcer', function() {
  describe('Seperate Announcers for Babkas and Baked Goods', function() {
    var bakeryCounter = counterCreator(3),
        babkaCounter = counterCreator(5),
        bakeryAnnouncer = countAnnouncer('Baked Goods', bakeryCounter)
        babkaAnnouncer = countAnnouncer('Babka', babkaCounter);

    it('should announce who is now being served in both lines', function() {
      expect(bakeryAnnouncer()).toEqual('Now serving Baked Goods number 4!');
      expect(babkaAnnouncer()).toEqual('Now serving Babka number 6!');
    });
  });
});