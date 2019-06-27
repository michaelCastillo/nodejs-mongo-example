var app =  require('../app');
var chai = require('chai');
var chaiHttp = require('chai-http');



chai.use(chaiHttp)
chai.should()
describe("articles", () => {
    //Se inicia la conexion con mongo  
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        it("Entrega todos los articulos como un Array", (done) =>{
            chai.request(app)
            .get("/articles")
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    });
});