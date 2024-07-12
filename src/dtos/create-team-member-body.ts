import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty() //para impedir que cria uma chamada post sem esse campo no body
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'member function should not be empty',
  })
  function: string;
}
