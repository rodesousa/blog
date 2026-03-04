---
weight: 1
title: "With, mon meilleur allié pour la lisibilité de code"
date: 2025-08-08T10:34:40+08:00
lastmod: 2025-08-08T10:34:40+08:00
draft: false
author: "Roberto"
description: "Mieux gérer les conditions à rallonge avec 'with' d'elixir"
images: []
resources:
- name: "featured-image"
  src: "featured-image.jpg"
tags: ["elixir"]
categories: ["elixir"]

lightgallery: true
---

Comme on passe plus de temps à lire du code qu'à l'écrire, il faut trouver des paterns qui améliore la lisibilité. `with` c'est mon *statement* préféré pour gérer des suites de conditions.

Il y a quelque années je faisais: 

```elixir

    socket =
      with {:ok, user} <- {:user, get_user_by_email(email)},
           true <- {:check_user, user_can_be_added_to_organization?(user, org_id)} do
        ...
        socket
        |> put_flash(:info, gettext("%{email} added", email: user.email))
      else
        {:user, nil} ->
          ...
          put_flash(socket, :error, gettext("user not found"))
        {:check_user, false} ->
          ...
          put_flash(socket, :error, gettext("user cannot be admin"))
      end
```

Avec cette structure on perd en lisibilité sur:

- l'enchainement des actions du `with`
- la gestion des erreurs

Si on lit plus qu'on écrit, donc je dois orienter mon écriture pour que ce soit plus simple à lire. Quel est mon besoin ?

- Comprendre rapidement les fonctions appelé
- Quand je dois debug, je veux savoir ou je dois aller. Pas le besoin de voir toute la gestion d'erreur, ça ne me sert à rien.


```elixir

    socket =
      with {:ok, user} <- get_user_by_email(socket, email),
           true <- user_can_be_added_to_organization?(socket, user, org_id) do
        ...
        socket
        |> put_flash(:info, gettext("%{email} added", email: user.email))
      end
...

defp get_user_by_email(socket, email) do
  case User.get_by_email(email) do
    nil -> put_flash(socket, :error, gettext("user not found"))
      user -> {:ok, user}
  end
end

defp user_can_be_added_to_organization?(socket, user, org_id) do
  case user_can_be_added_to_organization?(user, org_id) do
    false -> put_flash(socket, :error, gettext("user cannot be admin"))
    true -> true
  end
end
```


