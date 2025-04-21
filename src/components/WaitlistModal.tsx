
import React, { useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type WaitlistForm = {
  name: string;
  email: string;
  properties: number;
};

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ open, onOpenChange }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<WaitlistForm>({
    defaultValues: {
      name: "",
      email: "",
      properties: 1
    }
  });
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: WaitlistForm) => {
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ name: data.name, email: data.email, properties: Number(data.properties) }]);
      
      if (error) {
        console.error("Supabase error:", error);
        toast({
          title: "Erro",
          description: "Não foi possível adicionar à lista de espera. Tente novamente.",
        });
      } else {
        toast({
          title: "Sucesso!",
          description: "Você foi adicionado à lista de espera 🚀",
        });
        reset();
        onOpenChange(false);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado. Por favor, tente novamente.",
      });
    }
  };

  React.useEffect(() => {
    if (open) {
      setTimeout(() => {
        firstFieldRef.current?.focus();
      }, 100);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entrar na Lista de Espera</DialogTitle>
          <DialogDescription>
            Junte-se à lista de espera do Hostsys. Informe seus dados abaixo:
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="waitlist-nome">Nome</label>
            <Input
              id="waitlist-nome"
              placeholder="O seu nome"
              {...register("name", { required: "Nome é obrigatório" })}
              ref={firstFieldRef}
              disabled={isSubmitting}
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="waitlist-email">Email</label>
            <Input
              id="waitlist-email"
              placeholder="O seu email"
              type="email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: { value: /^\S+@\S+$/, message: "Email inválido" }
              })}
              disabled={isSubmitting}
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="waitlist-properties">Nº de propriedades geridas</label>
            <Input
              id="waitlist-properties"
              placeholder="Nº de propriedades"
              type="number"
              min={1}
              {...register("properties", {
                required: "Indique um número",
                valueAsNumber: true,
                min: { value: 1, message: "Deve ser pelo menos 1" }
              })}
              disabled={isSubmitting}
            />
            {errors.properties && (
              <p className="text-destructive text-sm mt-1">{errors.properties.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Aguardando..." : "Entrar na lista"}
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
