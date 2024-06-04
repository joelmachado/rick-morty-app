import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-single',
  standalone: false,
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.characterService.getCharacterById(id).subscribe(data => {
        this.character = data;
      });
    });
  }
}