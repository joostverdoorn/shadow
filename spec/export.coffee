describe "export", ->

  it "should export Shadow to the provided object", ->
    atari = {}
    Shadow._.factory(atari)

    expect(atari).toEqual(Shadow)
