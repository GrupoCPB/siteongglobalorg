import React,{ ReactElement, useState, FormEvent }  from "react";
import api from '../services/api' //chamando axios.create
import { useHistory } from 'react-router-dom';
import styled from "styled-components";


const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid;
  margin: 10px 0;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-weight: bold;
  position: relative;
  left: 38%;
  width: 30%;
  height: 40px;
  border-radius: 10px;
`;




function changeCityfunction(e) {}

function FormVoluntario() {

          //=============>> axios conection

          const history = useHistory()
          const [apelido, setApelido] = useState('');
        
          
          function handleCreateClass() {
            
           
                     
              
            
            api.post('voluntarios', {
              
            apelido,
          
            }).then(() => {
              alert('Cadastro realizado com sucesso!');
          
              history.push('/');
            }).catch(() => {
              alert('Erro no cadastro.');
            });
          
            
          }
  

  return (
    <form
      onSubmit={handleCreateClass}
    >
      <Label htmlFor="apelido">Nome:</Label>
      <Input 
      placeholder="Seu Nome" 
      id="apelido" required 
      //value="apelido"
      onChange={(e) => { setApelido(e.target.value) }}

      />
      <Label htmlFor="email">E-mail:</Label>
      <Input placeholder="E-mail de acesso" id="email" type="email" />
      <Label htmlFor="password">Senha:</Label>
      <Input
        placeholder="Nova senha de acesso"
        id="password"
        type="password"
        
      />
      <Label htmlFor="confirmPassword">Confirmar senha:</Label>
      <Input
        placeholder="Confirmar nova senha"
        id="confirmPassword"
        type="password"
     
      />
      <Label htmlFor="city">Cidade:</Label>
      <div className="dropdown" open="">
        <span>
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <Input
          placeholder="Cidade em que você reside"
          id="city"
          type="text"
          autocomplete="false"
          onChange={changeCityfunction()}
          
        />
      </div>
      <Button>Cadastrar</Button>
    </form>
  );
}

export default function CadastroVoluntario() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2vh 30vw",
        flexDirection: "column",
      }}>
      <h1 style={{ textAlign: "center" }}>Nova Conta</h1>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Crie uma nova conta para se voluntariar.
      </p>
      <FormVoluntario></FormVoluntario>
    </div>
  );
}